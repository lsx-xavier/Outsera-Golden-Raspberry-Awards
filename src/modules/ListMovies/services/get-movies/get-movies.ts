import { ApiService } from "@/shared/core/ApiService";
import { outseraApi } from "@/shared/infra/http-client";
import { GetMoviesServiceResponse } from "./types/Response";
import { GetMoviesServiceApiResponse } from "./types/ApiResponse";
import { GetMoviesServiceRequest } from "./types/Request";

export const getMoviesService = new ApiService<
  GetMoviesServiceRequest,
  Promise<GetMoviesServiceResponse.Root>
>({
  cacheKey: "movies",
  handler: async (req) => {
    const { data } = await outseraApi.get<GetMoviesServiceApiResponse.Root>(
      `/movies`,
      {
        params: {
          page: req.page - 1,
          size: req.rowsPerPage,
          ...(req.winner && req.winner !== "unassigned"
            ? { winner: req.winner === "yes" }
            : {}),
          ...(req.year !== undefined || req.year !== 0
            ? { year: req.year }
            : {}),
        },
      },
    );

    return {
      movies: data.content,
      pagination: {
        pageNumber: data.number,
        size: data.size,
        totalPages: data.totalPages,
        totalElements: data.totalElements,
      },
    };
  },
});
