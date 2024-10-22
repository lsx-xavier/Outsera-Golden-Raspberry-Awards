export const getPaginationInterval = (
  page: number,
  totalPages: number,
  visiblePages: number = 10,
) => {
  let from = page;
  let to = page + visiblePages;

  if (to > totalPages) {
    from -= to - totalPages;
    to = totalPages;
  }

  if (from > 2) {
    to -= 1;
  }

  if (totalPages - page <= 2) {
    to += 1;
  }

  if (from < 2) {
    from = 1;
  }

  return [from, to];
};
