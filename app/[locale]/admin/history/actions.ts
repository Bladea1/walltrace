'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { assertAdminOrRedirect } from '../_helpers';

const schema = z.object({
  locale: z.enum(['ru', 'en']),
  era_label: z.string().trim().min(2).max(60),
  year_label: z.string().trim().min(2).max(40),
  title: z.string().trim().min(2).max(140),
  body: z.string().trim().min(10).max(3000),
  accent: z.string().trim().min(2).max(60),
  sort_order: z.coerce.number().int().min(1).max(999),
});

export async function createHistoryEntryAction(locale: string, formData: FormData) {
  const { supabase } = await assertAdminOrRedirect(locale);
  const parsed = schema.safeParse({
    locale: formData.get('locale'),
    era_label: formData.get('era_label'),
    year_label: formData.get('year_label'),
    title: formData.get('title'),
    body: formData.get('body'),
    accent: formData.get('accent'),
    sort_order: formData.get('sort_order'),
  });

  if (!parsed.success) {
    redirect(`/${locale}/admin/history?error=${encodeURIComponent(locale === 'ru' ? 'Проверь поля формы.' : 'Please check the form fields.')}`);
  }

  const { error } = await supabase.from('history_entries').insert({
    ...parsed.data,
    is_published: true,
  });

  if (error) {
    redirect(`/${locale}/admin/history?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath(`/${locale}/history`);
  revalidatePath(`/${locale}/admin/history`);
  redirect(`/${locale}/admin/history?success=${encodeURIComponent(locale === 'ru' ? 'Блок истории добавлен.' : 'History entry created.')}`);
}

export async function toggleHistoryPublishedAction(locale: string, entryId: string, nextValue: boolean) {
  const { supabase } = await assertAdminOrRedirect(locale);

  const { error } = await supabase.from('history_entries').update({ is_published: nextValue }).eq('id', entryId);

  if (error) {
    redirect(`/${locale}/admin/history?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath(`/${locale}/history`);
  revalidatePath(`/${locale}/admin/history`);
  redirect(`/${locale}/admin/history?success=${encodeURIComponent(locale === 'ru' ? 'Статус обновлён.' : 'Status updated.')}`);
}

export async function deleteHistoryEntryAction(locale: string, entryId: string) {
  const { supabase } = await assertAdminOrRedirect(locale);

  const { error } = await supabase.from('history_entries').delete().eq('id', entryId);

  if (error) {
    redirect(`/${locale}/admin/history?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath(`/${locale}/history`);
  revalidatePath(`/${locale}/admin/history`);
  redirect(`/${locale}/admin/history?success=${encodeURIComponent(locale === 'ru' ? 'Блок истории удалён.' : 'History entry deleted.')}`);
}
