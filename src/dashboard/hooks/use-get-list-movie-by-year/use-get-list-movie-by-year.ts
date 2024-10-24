import { getListMovieByYearService } from "@/dashboard/services/get-list-movie-by-year";
import { GetListMovieByYearServiceRequest } from "@/dashboard/services/get-list-movie-by-year/types/Request";
import { queryClient } from "@/shared/router/query-client";
import { useMutation } from "@tanstack/react-query";

export function useGetListMovieByYear() {
  const { data, mutate, status } = useMutation({
    mutationFn: (req: GetListMovieByYearServiceRequest) =>
      getListMovieByYearService.execute(req),
    onSuccess: (dataSuccess, variables) => {
      queryClient.setQueryData(
        getListMovieByYearService.getCacheKey({ ...variables }),
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
