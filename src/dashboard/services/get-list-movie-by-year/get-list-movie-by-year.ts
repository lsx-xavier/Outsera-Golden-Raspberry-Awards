import { ApiService } from "@/shared/core/ApiService";
import { outseraApi } from "@/shared/infra/http-client";
import { GetListMovieByYearServiceResponse } from "./types/Response";
import { GetListMovieByYearServiceApiResponse } from "./types/ApiResponse";
import { GetListMovieByYearServiceRequest } from "./types/Request";

export const getListMovieByYearService = new ApiService<
  GetListMovieByYearServiceRequest,
  Promise<GetListMovieByYearServiceResponse.Root>
>({
  cacheKey: "list-movie-by-year",
  handler: async (req) => {
    const { data } = await outseraApi.get<
      GetListMovieByYearServiceApiResponse.Root[]
    >(`/movies?winner=true&year=${req.year}`);

    return {
      movie: data,
    };
  },
});
