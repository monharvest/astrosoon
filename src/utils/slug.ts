export const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s\-А-Яа-яӨөҮүЁё]/g, '')
    .replace(/\s+/g, '-');