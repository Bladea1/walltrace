'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/supabase/server';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function loginAction(locale: string, formData: FormData) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    redirect(`/${locale}/login?error=${encodeURIComponent('Supabase is not configured yet.')}`);
  }

  const parsed = schema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!parsed.success) {
    redirect(`/${locale}/login?error=${encodeURIComponent('Проверь email и пароль.')}`);
  }

  const { error } = await supabase.auth.signInWithPassword(parsed.data);

  if (error) {
    redirect(`/${locale}/login?error=${encodeURIComponent(error.message)}`);
  }

  redirect(`/${locale}/profile?success=${encodeURIComponent('Вход выполнен.')}`);
}
