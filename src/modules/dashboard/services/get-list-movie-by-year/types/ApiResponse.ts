export namespace GetListMovieByYearServiceApiResponse {
  export interface Root {
    id: number;
    year: number;
    title: string;
    studios: string[];
    producers: string[];
    winner: boolean;
  }
}
