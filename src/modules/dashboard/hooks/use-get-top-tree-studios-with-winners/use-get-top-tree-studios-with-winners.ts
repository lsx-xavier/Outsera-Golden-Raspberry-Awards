import { useQuery } from "@tanstack/react-query";
import { getTopTreeStudiosWithWinnersService } from "@/modules/dashboard/services/get-top-tree-studios-with-winners";
import { GetTopTreeStudiosWithWinnersServiceRequest } from "@/modules/dashboard/services/get-top-tree-studios-with-winners/types/Request";

export function useGetTopTreeStudiosWithWinners(
  req?: GetTopTreeStudiosWithWinnersServiceRequest,
) {
  const { data, isLoading } = useQuery({
    queryKey: getTopTreeStudiosWithWinnersService.getCacheKey({ ...req }),
    queryFn: () => getTopTreeStudiosWithWinnersService.execute(req),
    staleTime: Infinity,
  });

  return {
    studios: data?.studios,
    isLoading,
  };
}
