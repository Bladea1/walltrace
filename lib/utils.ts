export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9а-яё\s-]/gi, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function getSingleSearchParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0];
  return value;
}

export function formatDate(value: string, locale = 'ru') {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(locale === 'ru' ? 'ru-RU' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function formatDateTime(value: string, locale = 'ru') {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(locale === 'ru' ? 'ru-RU' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}
