import { getTopTreeStudiosWithWinnersService } from "@/dashboard/services/get-top-tree-studios-with-winners";
import { GetTopTreeStudiosWithWinnersServiceRequest } from "@/dashboard/services/get-top-tree-studios-with-winners/types/Request";
import { useQuery } from "@tanstack/react-query";

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
