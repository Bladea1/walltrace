'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createServerSupabaseClient } from '@/lib/supabase/server';

async function assertAdmin() {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return { supabase: null, userId: null, isAdmin: false };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { supabase, userId: null, isAdmin: false };
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle();

  return { supabase, userId: user.id, isAdmin: profile?.role === 'admin' };
}

export async function approveArtworkAction(locale: string, artworkId: string) {
  const { supabase, isAdmin } = await assertAdmin();

  if (!supabase || !isAdmin) {
    redirect(`/${locale}/profile?error=${encodeURIComponent('Недостаточно прав для модерации.')}`);
  }

  const { error } = await supabase
    .from('artworks')
    .update({ status: 'approved', approved_at: new Date().toISOString(), moderation_note: null })
    .eq('id', artworkId);

  if (error) {
    redirect(`/${locale}/admin?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath(`/${locale}/admin`);
  revalidatePath(`/${locale}/profile`);
  revalidatePath(`/${locale}/archive`);

  redirect(`/${locale}/admin?success=${encodeURIComponent('Работа опубликована.')}`);
}

export async function rejectArtworkAction(locale: string, artworkId: string) {
  const { supabase, isAdmin } = await assertAdmin();

  if (!supabase || !isAdmin) {
    redirect(`/${locale}/profile?error=${encodeURIComponent('Недостаточно прав для модерации.')}`);
  }

  const { error } = await supabase
    .from('artworks')
    .update({ status: 'rejected', moderation_note: 'Rejected by administrator' })
    .eq('id', artworkId);

  if (error) {
    redirect(`/${locale}/admin?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath(`/${locale}/admin`);
  revalidatePath(`/${locale}/profile`);
  revalidatePath(`/${locale}/archive`);

  redirect(`/${locale}/admin?success=${encodeURIComponent('Работа отклонена.')}`);
}

export async function deleteArtworkAction(locale: string, artworkId: string) {
  const { supabase, isAdmin } = await assertAdmin();

  if (!supabase || !isAdmin) {
    redirect(`/${locale}/profile?error=${encodeURIComponent('Недостаточно прав для модерации.')}`);
  }

  const { error } = await supabase.from('artworks').delete().eq('id', artworkId);

  if (error) {
    redirect(`/${locale}/admin?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath(`/${locale}/admin`);
  revalidatePath(`/${locale}/profile`);
  revalidatePath(`/${locale}/archive`);

  redirect(`/${locale}/admin?success=${encodeURIComponent('Работа удалена.')}`);
}
