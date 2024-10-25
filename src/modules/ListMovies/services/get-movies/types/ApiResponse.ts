export namespace GetMoviesServiceApiResponse {
  export interface Sort {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
  }

  export interface Pageable {
    sort: Sort;
    offset: number;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    unpaged: boolean;
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
    content: Content[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
  }
}
