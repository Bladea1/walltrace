'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { siteUrl } from '@/lib/supabase/config';

const schema = z.object({
  display_name: z.string().min(2).max(80),
  email: z.string().email(),
  password: z.string().min(6),
});

export async function registerAction(locale: string, formData: FormData) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    redirect(`/${locale}/register?error=${encodeURIComponent('Supabase is not configured yet.')}`);
  }

  const parsed = schema.safeParse({
    display_name: formData.get('display_name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!parsed.success) {
    redirect(`/${locale}/register?error=${encodeURIComponent('Проверь корректность введённых данных.')}`);
  }

  const origin = (await headers()).get('origin') ?? siteUrl;

  const { error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
    options: {
      data: {
        display_name: parsed.data.display_name,
      },
      emailRedirectTo: `${origin}/auth/callback?next=/${locale}/profile`,
    },
  });

  if (error) {
    redirect(`/${locale}/register?error=${encodeURIComponent(error.message)}`);
  }

  redirect(
    `/${locale}/login?message=${encodeURIComponent('Аккаунт создан. Если Supabase требует подтверждение почты, открой письмо и вернись на сайт.')}`
  );
}
