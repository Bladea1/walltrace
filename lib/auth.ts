import type { User } from '@supabase/supabase-js';
import { createServerSupabaseClient } from './supabase/server';
import { isSupabaseConfigured } from './supabase/config';

export type AuthState = {
  configured: boolean;
  user: User | null;
  profile: {
    display_name: string | null;
    role: string | null;
    avatar_url?: string | null;
    username?: string | null;
  } | null;
};

export async function getAuthState(): Promise<AuthState> {
  if (!isSupabaseConfigured) {
    return { configured: false, user: null, profile: null };
  }

  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return { configured: false, user: null, profile: null };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { configured: true, user: null, profile: null };
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('display_name, role, avatar_url, username')
    .eq('id', user.id)
    .maybeSingle();

  return {
    configured: true,
    user,
    profile: profile ?? null,
  };
}
