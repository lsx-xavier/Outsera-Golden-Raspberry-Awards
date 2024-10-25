import { ApiService } from "@/shared/core/ApiService";
import { outseraApi } from "@/shared/infra/http-client";
import { GetTopTreeStudiosWithWinnersServiceResponse } from "./types/Response";
import { GetTopTreeStudiosWithWinnersServiceApiResponse } from "./types/ApiResponse";
import { GetTopTreeStudiosWithWinnersServiceRequest } from "./types/Request";

export const getTopTreeStudiosWithWinnersService = new ApiService<
  GetTopTreeStudiosWithWinnersServiceRequest,
  Promise<GetTopTreeStudiosWithWinnersServiceResponse.Root>
>({
  cacheKey: "top-tree-studios-with-winners",
  handler: async (req) => {
    const { data } =
      await outseraApi.get<GetTopTreeStudiosWithWinnersServiceApiResponse.Root>(
        "/movies?projection=studios-with-win-count",
      );

    if (req.limit) data.studios = data.studios.slice(0, req.limit);
    if (req.orderBy) {
      data.studios = data.studios.sort((a, b) => {
        if (req.sortBy === "winCount") {
          return req.orderBy === "ASC"
            ? a.winCount - b.winCount
            : b.winCount - a.winCount;
        }

        if (req.sortBy === "name") {
          if (req.orderBy === "ASC") {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
          } else {
            if (b.name < a.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
          }

          return 0;
        }

        return req.orderBy === "ASC"
          ? a.winCount - b.winCount
          : b.winCount - a.winCount;
      });
    }

    return {
      studios: data.studios,
    };
  },
});
