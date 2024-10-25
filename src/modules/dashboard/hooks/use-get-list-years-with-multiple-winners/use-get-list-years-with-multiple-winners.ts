import { getListYearsWithMultipleWinnersService } from "@/modules/dashboard/services/get-list-years-with-multiple-winners";
import { useQuery } from "@tanstack/react-query";

export function useGetYearsWithMoreThanOneWinner() {
  const { data, isLoading } = useQuery({
    queryKey: getListYearsWithMultipleWinnersService.getCacheKey(),
    queryFn: () => getListYearsWithMultipleWinnersService.execute(),
    staleTime: Infinity,
  });

  return {
    years: data?.years,
    isLoading,
  };
}
