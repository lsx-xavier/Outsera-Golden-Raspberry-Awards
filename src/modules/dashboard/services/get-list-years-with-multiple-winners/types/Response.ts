export namespace GetListYearsWithMultipleWinnersServiceResponse {
  export interface Year {
    year: number;
    winnerCount: number;
  }

  export interface Root {
    years: Year[];
  }
}
