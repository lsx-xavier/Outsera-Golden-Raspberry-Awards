import { getMoviesService } from "@/ListMovies/services/get-movies";
import { GetMoviesServiceRequest } from "@/ListMovies/services/get-movies/types/Request";
import { useQuery } from "@tanstack/react-query";

export function useGetMovies(req: GetMoviesServiceRequest) {
  const { data, isLoading } = useQuery({
    queryKey: getMoviesService.getCacheKey({ ...req }),
    queryFn: () => getMoviesService.execute(req),
    staleTime: Infinity,
  });

  return {
    data,
    isLoading,
  };
}
