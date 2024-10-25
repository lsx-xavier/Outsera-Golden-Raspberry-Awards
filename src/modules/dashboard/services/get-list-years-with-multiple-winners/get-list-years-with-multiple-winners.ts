import { ApiService } from "@/shared/core/ApiService";
import { outseraApi } from "@/shared/infra/http-client";
import { GetListYearsWithMultipleWinnersServiceResponse } from "./types/Response";
import { GetListYearsWithMultipleWinnersServiceApiResponse } from "./types/ApiResponse";
import { GetListYearsWithMultipleWinnersServiceRequest } from "./types/Request";

export const getListYearsWithMultipleWinnersService = new ApiService<
  GetListYearsWithMultipleWinnersServiceRequest,
  Promise<GetListYearsWithMultipleWinnersServiceResponse.Root>
>({
  cacheKey: "years-with-more-than-one-winner",
  handler: async () => {
    const { data } =
      await outseraApi.get<GetListYearsWithMultipleWinnersServiceApiResponse.Root>(
        "/movies?projection=years-with-multiple-winners",
      );

    return {
      years: data.years,
    };
  },
});
