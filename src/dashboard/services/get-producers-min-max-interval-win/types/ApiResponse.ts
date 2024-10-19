export namespace GetProducersMinMaxIntervalWinServiceApiResponse {
  export interface Info {
    producer: string;
    interval: number;
    previousWin: number;
    followingWin: number;
  }

  export interface Root {
    min: Info[];
    max: Info[];
  }
}
