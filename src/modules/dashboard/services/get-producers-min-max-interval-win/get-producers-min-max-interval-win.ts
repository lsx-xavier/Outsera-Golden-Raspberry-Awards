import { ApiService } from "@/shared/core/ApiService";
import { outseraApi } from "@/shared/infra/http-client";
import { GetProducersMinMaxIntervalWinServiceResponse } from "./types/Response";
import { GetProducersMinMaxIntervalWinServiceApiResponse } from "./types/ApiResponse";
import { GetProducersMinMaxIntervalWinServiceRequest } from "./types/Request";

export const getProducersMinMaxIntervalWinService = new ApiService<
  GetProducersMinMaxIntervalWinServiceRequest,
  Promise<GetProducersMinMaxIntervalWinServiceResponse.Root>
>({
  cacheKey: "producers-min-max-interval-win",
  handler: async () => {
    const { data } =
      await outseraApi.get<GetProducersMinMaxIntervalWinServiceApiResponse.Root>(
        "/movies?projection=max-min-win-interval-for-producers",
      );

    return {
      min: data.min,
      max: data.max,
    };
  },
});
