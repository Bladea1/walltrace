'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/supabase/server';

const commentSchema = z.object({
  body: z.string().trim().min(2).max(1000),
});

async function getAuth(locale: string, nextPath: string) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    redirect(`${nextPath}?error=${encodeURIComponent('Supabase is not configured yet.')}`);
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/${locale}/login?error=${encodeURIComponent(locale === 'ru' ? 'Сначала войди в аккаунт.' : 'Please log in first.')}`);
  }

  return { supabase, user };
}

export async function toggleLikeAction(locale: string, slug: string, artworkId: string) {
  const nextPath = `/${locale}/archive/${slug}`;
  const { supabase, user } = await getAuth(locale, nextPath);

  const { data: existing } = await supabase
    .from('likes')
    .select('artwork_id')
    .eq('artwork_id', artworkId)
    .eq('user_id', user.id)
    .maybeSingle();

  if (existing) {
    await supabase.from('likes').delete().eq('artwork_id', artworkId).eq('user_id', user.id);
  } else {
    await supabase.from('likes').insert({ artwork_id: artworkId, user_id: user.id });
  }

  revalidatePath(nextPath);
  revalidatePath(`/${locale}/profile`);
  redirect(nextPath);
}

export async function toggleFavoriteAction(locale: string, slug: string, artworkId: string) {
  const nextPath = `/${locale}/archive/${slug}`;
  const { supabase, user } = await getAuth(locale, nextPath);

  const { data: existing } = await supabase
    .from('favorites')
    .select('artwork_id')
    .eq('artwork_id', artworkId)
    .eq('user_id', user.id)
    .maybeSingle();

  if (existing) {
    await supabase.from('favorites').delete().eq('artwork_id', artworkId).eq('user_id', user.id);
  } else {
    await supabase.from('favorites').insert({ artwork_id: artworkId, user_id: user.id });
  }

  revalidatePath(nextPath);
  revalidatePath(`/${locale}/profile`);
  redirect(nextPath);
}

export async function createCommentAction(locale: string, slug: string, artworkId: string, formData: FormData) {
  const nextPath = `/${locale}/archive/${slug}`;
  const { supabase, user } = await getAuth(locale, nextPath);

  const parsed = commentSchema.safeParse({
    body: formData.get('body'),
  });

  if (!parsed.success) {
    redirect(`${nextPath}?error=${encodeURIComponent(locale === 'ru' ? 'Комментарий слишком короткий.' : 'Comment is too short.')}`);
  }

  const { error } = await supabase.from('comments').insert({
    artwork_id: artworkId,
    user_id: user.id,
    body: parsed.data.body,
  });

  if (error) {
    redirect(`${nextPath}?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath(nextPath);
  redirect(nextPath);
}
