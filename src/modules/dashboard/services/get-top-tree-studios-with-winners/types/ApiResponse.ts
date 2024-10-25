export namespace GetTopTreeStudiosWithWinnersServiceApiResponse {
  export interface Studio {
    name: string;
    winCount: number;
  }

  export interface Root {
    studios: Studio[];
  }
}
