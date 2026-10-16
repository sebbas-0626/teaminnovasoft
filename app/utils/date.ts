export function formatDate(date: string, locale = "en-US") {
  return new Date(date).toLocaleDateString(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}