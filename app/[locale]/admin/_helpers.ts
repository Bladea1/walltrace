import { redirect } from 'next/navigation';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export async function assertAdminOrRedirect(locale: string) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    redirect(`/${locale}/admin?error=${encodeURIComponent('Supabase is not configured yet.')}`);
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/${locale}/login?error=${encodeURIComponent(locale === 'ru' ? 'Сначала войди в аккаунт.' : 'Please log in first.')}`);
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle();

  if (profile?.role !== 'admin') {
    redirect(`/${locale}/admin?error=${encodeURIComponent(locale === 'ru' ? 'Недостаточно прав.' : 'Not enough permissions.')}`);
  }

  return { supabase, user };
}
