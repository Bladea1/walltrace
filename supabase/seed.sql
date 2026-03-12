insert into public.history_entries (locale, era_label, year_label, title, body, accent, sort_order, is_published)
values
  ('ru', 'Origins', '1960s', 'Ранние городские надписи', 'Появление заметных подписей и первых повторяющихся имён в городской среде.', 'Street marks', 1, true),
  ('en', 'Origins', '1960s', 'Early urban markings', 'Visible signatures and recurring names begin to appear in the city.', 'Street marks', 1, true)
on conflict do nothing;

insert into public.news_posts (locale, slug, category, title, excerpt, body, is_published, published_at)
values
  ('ru', 'seed-archive-importance', 'Editorial', 'Почему архив важен', 'Архив сохраняет контекст работы и её автора.', 'Цифровой архив фиксирует не только изображение, но и место, дату, авторство и связь с культурным контекстом.', true, now()),
  ('en', 'seed-archive-importance-en', 'Editorial', 'Why archives matter', 'An archive keeps the work connected to context and authorship.', 'A digital archive preserves not only the image, but also place, date, authorship, and cultural context.', true, now())
on conflict (slug) do nothing;

insert into public.events (locale, slug, title, city, venue, summary, body, starts_at, is_published)
values
  ('ru', 'seed-open-wall-ru', 'Open Wall Session', 'Rotterdam', 'Open Yard', 'Открытая сессия для художников и зрителей.', 'Событие соединяет архивную логику платформы с живой городской сценой.', now() + interval '14 day', true),
  ('en', 'seed-open-wall-en', 'Open Wall Session', 'Rotterdam', 'Open Yard', 'An open session for artists and visitors.', 'The event connects the platform archive with the living urban scene.', now() + interval '14 day', true)
on conflict (slug) do nothing;
