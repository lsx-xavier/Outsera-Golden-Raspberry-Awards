export namespace GetMoviesServiceResponse {
  export interface Pagination {
    pageNumber: number; // represent the current page number
    size: number; // represent the size of the page (elements per page)
    totalPages: number; // represent the total number of pages
    totalElements: number; // represent the total number of elements
  }

  export interface Content {
    id: number;
    year: number;
    title: string;
    studios: string[];
    producers: string[];
    winner: boolean;
  }

  export interface Root {
    movies: Content[];
    pagination: Pagination;
  }
}
