'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export async function toggleFollowAction(locale: string, artistId: string) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    redirect(`/${locale}/artists/${artistId}?error=${encodeURIComponent('Supabase is not configured yet.')}`);
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/${locale}/login?error=${encodeURIComponent(locale === 'ru' ? 'Сначала войди в аккаунт.' : 'Please log in first.')}`);
  }

  if (user.id === artistId) {
    redirect(`/${locale}/artists/${artistId}?error=${encodeURIComponent(locale === 'ru' ? 'Нельзя подписаться на самого себя.' : 'You cannot follow yourself.')}`);
  }

  const { data: existing } = await supabase
    .from('follows')
    .select('following_id')
    .eq('follower_id', user.id)
    .eq('following_id', artistId)
    .maybeSingle();

  if (existing) {
    await supabase.from('follows').delete().eq('follower_id', user.id).eq('following_id', artistId);
  } else {
    await supabase.from('follows').insert({ follower_id: user.id, following_id: artistId });
  }

  revalidatePath(`/${locale}/artists/${artistId}`);
  revalidatePath(`/${locale}/artists`);
  redirect(`/${locale}/artists/${artistId}`);
}
