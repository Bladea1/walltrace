'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/supabase/server';

const schema = z.object({
  display_name: z.string().min(2).max(80),
  username: z.string().max(40).optional().or(z.literal('')),
  city: z.string().max(80).optional().or(z.literal('')),
  country: z.string().max(80).optional().or(z.literal('')),
  style: z.string().max(120).optional().or(z.literal('')),
  bio: z.string().max(1000).optional().or(z.literal('')),
});

function getText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export async function updateProfileAction(locale: string, formData: FormData) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    redirect(`/${locale}/profile?error=${encodeURIComponent('Supabase is not configured yet.')}`);
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/${locale}/login?error=${encodeURIComponent('Сначала войди в аккаунт.')}`);
  }

  const parsed = schema.safeParse({
    display_name: getText(formData, 'display_name'),
    username: getText(formData, 'username'),
    city: getText(formData, 'city'),
    country: getText(formData, 'country'),
    style: getText(formData, 'style'),
    bio: getText(formData, 'bio'),
  });

  if (!parsed.success) {
    redirect(`/${locale}/profile?error=${encodeURIComponent('Проверь заполнение полей профиля.')}`);
  }

  let avatarUrl: string | null | undefined = undefined;
  const avatar = formData.get('avatar');

  if (avatar instanceof File && avatar.size > 0) {
    const maxSize = 4 * 1024 * 1024;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

    if (!allowedTypes.includes(avatar.type)) {
      redirect(`/${locale}/profile?error=${encodeURIComponent('Для аватара доступны только JPG, PNG и WEBP.')}`);
    }

    if (avatar.size > maxSize) {
      redirect(`/${locale}/profile?error=${encodeURIComponent('Аватар слишком большой. Максимум 4 MB.')}`);
    }

    const extension = avatar.name.split('.').pop()?.toLowerCase() || 'jpg';
    const filePath = `${user.id}/avatar-${Date.now()}.${extension}`;

    const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, avatar, {
      contentType: avatar.type,
      upsert: false,
    });

    if (uploadError) {
      redirect(`/${locale}/profile?error=${encodeURIComponent(`Не удалось загрузить аватар: ${uploadError.message}`)}`);
    }

    const { data: publicUrlData } = supabase.storage.from('avatars').getPublicUrl(filePath);
    avatarUrl = publicUrlData.publicUrl;
  }

  const payload = {
    id: user.id,
    email: user.email ?? null,
    display_name: parsed.data.display_name,
    username: parsed.data.username || null,
    city: parsed.data.city || null,
    country: parsed.data.country || null,
    style: parsed.data.style || null,
    bio: parsed.data.bio || null,
    ...(avatarUrl ? { avatar_url: avatarUrl } : {}),
  };

  const { error } = await supabase.from('profiles').upsert(payload, { onConflict: 'id' });

  if (error) {
    redirect(`/${locale}/profile?error=${encodeURIComponent(error.message)}`);
  }

  redirect(`/${locale}/profile?success=${encodeURIComponent('Профиль сохранён.')}`);
}

export async function logoutAction(locale: string) {
  const supabase = await createServerSupabaseClient();

  if (supabase) {
    await supabase.auth.signOut();
  }

  redirect(`/${locale}/login?message=${encodeURIComponent('Вы вышли из аккаунта.')}`);
}
