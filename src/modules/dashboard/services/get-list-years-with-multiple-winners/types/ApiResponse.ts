export namespace GetListYearsWithMultipleWinnersServiceApiResponse {
  export interface Year {
    year: number;
    winnerCount: number;
  }

  export interface Root {
    years: Year[];
  }
}
