export namespace GetListMovieByYearServiceResponse {
  export interface Movie {
    id: number;
    year: number;
    title: string;
    studios: string[];
    producers: string[];
    winner: boolean;
  }

  export interface Root {
    movie: Movie[];
  }
}
