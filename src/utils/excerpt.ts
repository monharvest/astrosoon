/**
 * Fallback meta description for posts whose frontmatter has none. A
 * hand-written `description` is always better — this only stops those pages
 * from inheriting the generic site-wide description.
 */
export function excerpt(markdown: string, maxLength = 155): string {
  const plain = markdown
    .replace(/^---[\s\S]*?---/, '')       // frontmatter, if present
    .replace(/```[\s\S]*?```/g, '')       // fenced code
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> text
    .replace(/^\s{0,3}#{1,6}\s+.*$/gm, '')   // headings
    .replace(/^\s{0,3}>\s?/gm, '')        // blockquote markers
    .replace(/[*_`~]/g, '')               // inline emphasis
    .replace(/\s+/g, ' ')
    .trim();

  if (plain.length <= maxLength) return plain;
  const cut = plain.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 60 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:—-]$/, '')}…`;
}
