export type GetMoviesServiceRequest = {
  year: number | undefined;
  winner: "yes" | "no" | "unassigned";
  page: number;
  rowsPerPage?: number;
};
