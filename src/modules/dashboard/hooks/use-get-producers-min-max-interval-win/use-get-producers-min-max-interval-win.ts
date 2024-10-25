import { getProducersMinMaxIntervalWinService } from "@/modules/dashboard/services/get-producers-min-max-interval-win";
import { useQuery } from "@tanstack/react-query";

export function useGetProducersMinMaxIntervalWin() {
  const { data, isLoading } = useQuery({
    queryKey: getProducersMinMaxIntervalWinService.getCacheKey(),
    queryFn: () => getProducersMinMaxIntervalWinService.execute(),
    staleTime: Infinity,
  });

  return {
    average: data,
    isLoading,
  };
}
