'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { slugify } from '@/lib/utils';

const schema = z.object({
  title: z.string().min(2, 'Название слишком короткое').max(120),
  author_name: z.string().min(2, 'Автор слишком короткий').max(120),
  location_name: z.string().min(2, 'Укажи место создания').max(180),
  created_year: z.string().min(2, 'Укажи год').max(20),
  style: z.string().min(2, 'Укажи стиль').max(120),
  tags: z.string().max(240).optional().or(z.literal('')),
  description: z.string().min(10, 'Описание должно быть не короче 10 символов').max(4000),
});

function getText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export async function submitArtworkAction(locale: string, formData: FormData) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    redirect(`/${locale}/submit?error=${encodeURIComponent('Supabase is not configured yet.')}`);
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/${locale}/login?error=${encodeURIComponent('Сначала войди в аккаунт.')}`);
  }

  const payload = {
    title: getText(formData, 'title'),
    author_name: getText(formData, 'author_name'),
    location_name: getText(formData, 'location_name'),
    created_year: getText(formData, 'created_year'),
    style: getText(formData, 'style'),
    tags: getText(formData, 'tags'),
    description: getText(formData, 'description'),
  };

  const parsed = schema.safeParse(payload);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    console.error('submitArtworkAction validation error:', fieldErrors);

    const firstError =
      fieldErrors.title?.[0] ||
      fieldErrors.author_name?.[0] ||
      fieldErrors.location_name?.[0] ||
      fieldErrors.created_year?.[0] ||
      fieldErrors.style?.[0] ||
      fieldErrors.description?.[0] ||
      'Проверь заполнение всех полей.';

    redirect(`/${locale}/submit?error=${encodeURIComponent(firstError)}`);
  }

  const slug = `${slugify(parsed.data.title)}-${Date.now().toString().slice(-6)}`;
  const tags = parsed.data.tags
    ? parsed.data.tags
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  const { data: insertedArtwork, error: insertError } = await supabase
    .from('artworks')
    .insert({
      user_id: user.id,
      title: parsed.data.title,
      slug,
      author_name: parsed.data.author_name,
      location_name: parsed.data.location_name,
      created_year: parsed.data.created_year,
      style: parsed.data.style,
      tags,
      description: parsed.data.description,
      status: 'pending',
      locale,
    })
    .select('id')
    .single();

  if (insertError || !insertedArtwork) {
    console.error('submitArtworkAction insert error:', insertError);
    redirect(
      `/${locale}/submit?error=${encodeURIComponent(
        insertError?.message || 'Не удалось сохранить работу.'
      )}`
    );
  }

  const image = formData.get('image');

  if (image instanceof File && image.size > 0) {
    const maxSize = 6 * 1024 * 1024;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

    if (!allowedTypes.includes(image.type)) {
      redirect(`/${locale}/submit?error=${encodeURIComponent('Допустимы только JPG, PNG и WEBP.')}`);
    }

    if (image.size > maxSize) {
      redirect(`/${locale}/submit?error=${encodeURIComponent('Файл слишком большой. Максимум 6 MB.')}`);
    }

    const extension = image.name.split('.').pop()?.toLowerCase() || 'jpg';
    const baseSlug = slugify(parsed.data.title) || 'artwork';
    const imagePath = `${user.id}/${Date.now()}-${baseSlug}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from('artworks')
      .upload(imagePath, image, {
        contentType: image.type,
        upsert: false,
      });

    if (uploadError) {
      console.error('submitArtworkAction upload error:', uploadError);

      await supabase
        .from('artworks')
        .update({
          moderation_note: `Image upload failed: ${uploadError.message}`,
        })
        .eq('id', insertedArtwork.id);

      revalidatePath(`/${locale}/profile`);
      revalidatePath(`/${locale}/admin`);

      redirect(
        `/${locale}/profile?success=${encodeURIComponent(
          'Работа сохранена, но изображение не загрузилось. Проверь Storage.'
        )}`
      );
    }

    const { data: publicUrlData } = supabase.storage.from('artworks').getPublicUrl(imagePath);

    const { error: updateImageError } = await supabase
      .from('artworks')
      .update({
        image_path: imagePath,
        image_url: publicUrlData.publicUrl,
      })
      .eq('id', insertedArtwork.id);

    if (updateImageError) {
      console.error('submitArtworkAction image update error:', updateImageError);
      redirect(`/${locale}/submit?error=${encodeURIComponent(updateImageError.message)}`);
    }
  }

  revalidatePath(`/${locale}/profile`);
  revalidatePath(`/${locale}/admin`);
  revalidatePath(`/${locale}/archive`);

  redirect(`/${locale}/profile?success=${encodeURIComponent('Работа отправлена на модерацию.')}`);
}
