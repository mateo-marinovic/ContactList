export function formatSearchQuery(search: string): string {
  return search.toLowerCase().replace(/\s/g, "");
}
