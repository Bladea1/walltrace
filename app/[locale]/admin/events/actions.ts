'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { slugify } from '@/lib/utils';
import { assertAdminOrRedirect } from '../_helpers';

const schema = z.object({
  locale: z.enum(['ru', 'en']),
  title: z.string().trim().min(2).max(160),
  city: z.string().trim().min(2).max(100),
  venue: z.string().trim().max(120).optional().or(z.literal('')),
  starts_at: z.string().trim().min(5).max(40),
  summary: z.string().trim().min(10).max(400),
  body: z.string().trim().min(20).max(6000),
});

export async function createEventAction(locale: string, formData: FormData) {
  const { supabase } = await assertAdminOrRedirect(locale);
  const parsed = schema.safeParse({
    locale: formData.get('locale'),
    title: formData.get('title'),
    city: formData.get('city'),
    venue: formData.get('venue'),
    starts_at: formData.get('starts_at'),
    summary: formData.get('summary'),
    body: formData.get('body'),
  });

  if (!parsed.success) {
    redirect(`/${locale}/admin/events?error=${encodeURIComponent(locale === 'ru' ? 'Проверь поля формы.' : 'Please check the form fields.')}`);
  }

  const slug = `${slugify(parsed.data.title)}-${Date.now().toString().slice(-6)}`;
  const startsAt = new Date(parsed.data.starts_at);

  if (Number.isNaN(startsAt.getTime())) {
    redirect(`/${locale}/admin/events?error=${encodeURIComponent(locale === 'ru' ? 'Некорректная дата события.' : 'Invalid event date.')}`);
  }

  const { error } = await supabase.from('events').insert({
    locale: parsed.data.locale,
    slug,
    title: parsed.data.title,
    city: parsed.data.city,
    venue: parsed.data.venue || null,
    starts_at: startsAt.toISOString(),
    summary: parsed.data.summary,
    body: parsed.data.body,
    is_published: true,
  });

  if (error) {
    redirect(`/${locale}/admin/events?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath(`/${locale}/events`);
  revalidatePath(`/${locale}/admin/events`);
  redirect(`/${locale}/admin/events?success=${encodeURIComponent(locale === 'ru' ? 'Событие добавлено.' : 'Event created.')}`);
}

export async function toggleEventPublishedAction(locale: string, eventId: string, nextValue: boolean) {
  const { supabase } = await assertAdminOrRedirect(locale);

  const { error } = await supabase.from('events').update({ is_published: nextValue }).eq('id', eventId);

  if (error) {
    redirect(`/${locale}/admin/events?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath(`/${locale}/events`);
  revalidatePath(`/${locale}/admin/events`);
  redirect(`/${locale}/admin/events?success=${encodeURIComponent(locale === 'ru' ? 'Статус обновлён.' : 'Status updated.')}`);
}

export async function deleteEventAction(locale: string, eventId: string) {
  const { supabase } = await assertAdminOrRedirect(locale);

  const { error } = await supabase.from('events').delete().eq('id', eventId);

  if (error) {
    redirect(`/${locale}/admin/events?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath(`/${locale}/events`);
  revalidatePath(`/${locale}/admin/events`);
  redirect(`/${locale}/admin/events?success=${encodeURIComponent(locale === 'ru' ? 'Событие удалено.' : 'Event deleted.')}`);
}
