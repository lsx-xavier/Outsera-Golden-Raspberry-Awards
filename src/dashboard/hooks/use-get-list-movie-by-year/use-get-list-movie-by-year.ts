import { getListMovieByYearService } from "@/dashboard/services/get-list-movie-by-year";
import { GetListMovieByYearServiceRequest } from "@/dashboard/services/get-list-movie-by-year/types/Request";
import { queryClient } from "@/shared/router/query-client";
import { useMutation } from "@tanstack/react-query";

export function useGetListMovieByYear(req: GetListMovieByYearServiceRequest) {
  const { data, mutate, status } = useMutation({
    mutationFn: () => getListMovieByYearService.execute(req),
    onSuccess: (dataSuccess) => {
      queryClient.setQueryData(
        getListMovieByYearService.getCacheKey({ ...req }),
        dataSuccess,
      );
    },
  });

  return {
    movie: data?.movie,
    isLoading: status,
    searchMovie: mutate,
  };
}
