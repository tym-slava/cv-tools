export function formatDateRange(
  startDate: string,
  endDate: string,
  isCurrent: boolean,
  separator = "–"
): string {
  if (isCurrent) return `${startDate} ${separator} Present`;
  if (endDate) return `${startDate} ${separator} ${endDate}`;
  return startDate;
}
