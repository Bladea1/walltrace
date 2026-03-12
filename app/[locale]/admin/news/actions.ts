'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { slugify } from '@/lib/utils';
import { assertAdminOrRedirect } from '../_helpers';

const schema = z.object({
  locale: z.enum(['ru', 'en']),
  category: z.string().trim().min(2).max(60),
  title: z.string().trim().min(2).max(160),
  excerpt: z.string().trim().min(10).max(300),
  body: z.string().trim().min(30).max(6000),
  cover_image_url: z.string().trim().max(500).optional().or(z.literal('')),
});

export async function createNewsPostAction(locale: string, formData: FormData) {
  const { supabase } = await assertAdminOrRedirect(locale);
  const parsed = schema.safeParse({
    locale: formData.get('locale'),
    category: formData.get('category'),
    title: formData.get('title'),
    excerpt: formData.get('excerpt'),
    body: formData.get('body'),
    cover_image_url: formData.get('cover_image_url'),
  });

  if (!parsed.success) {
    redirect(`/${locale}/admin/news?error=${encodeURIComponent(locale === 'ru' ? 'Проверь поля формы.' : 'Please check the form fields.')}`);
  }

  const slug = `${slugify(parsed.data.title)}-${Date.now().toString().slice(-6)}`;

  const { error } = await supabase.from('news_posts').insert({
    ...parsed.data,
    slug,
    is_published: true,
    published_at: new Date().toISOString(),
  });

  if (error) {
    redirect(`/${locale}/admin/news?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath(`/${locale}/news`);
  revalidatePath(`/${locale}/admin/news`);
  redirect(`/${locale}/admin/news?success=${encodeURIComponent(locale === 'ru' ? 'Публикация добавлена.' : 'Post created.')}`);
}

export async function toggleNewsPublishedAction(locale: string, postId: string, nextValue: boolean) {
  const { supabase } = await assertAdminOrRedirect(locale);

  const { error } = await supabase.from('news_posts').update({ is_published: nextValue }).eq('id', postId);

  if (error) {
    redirect(`/${locale}/admin/news?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath(`/${locale}/news`);
  revalidatePath(`/${locale}/admin/news`);
  redirect(`/${locale}/admin/news?success=${encodeURIComponent(locale === 'ru' ? 'Статус обновлён.' : 'Status updated.')}`);
}

export async function deleteNewsPostAction(locale: string, postId: string) {
  const { supabase } = await assertAdminOrRedirect(locale);

  const { error } = await supabase.from('news_posts').delete().eq('id', postId);

  if (error) {
    redirect(`/${locale}/admin/news?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath(`/${locale}/news`);
  revalidatePath(`/${locale}/admin/news`);
  redirect(`/${locale}/admin/news?success=${encodeURIComponent(locale === 'ru' ? 'Публикация удалена.' : 'Post deleted.')}`);
}
