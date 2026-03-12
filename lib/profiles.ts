import type { User } from '@supabase/supabase-js';
import { createServerSupabaseClient } from './supabase/server';

export async function ensureProfile(user: User) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) return null;

  const fallbackName =
    (typeof user.user_metadata?.display_name === 'string' && user.user_metadata.display_name) ||
    (user.email ? user.email.split('@')[0] : 'writer');

  const payload = {
    id: user.id,
    email: user.email ?? null,
    display_name: fallbackName,
  };

  const { data, error } = await supabase
    .from('profiles')
    .upsert(payload, { onConflict: 'id' })
    .select('*')
    .maybeSingle();

  if (error) {
    return null;
  }

  return data;
}
