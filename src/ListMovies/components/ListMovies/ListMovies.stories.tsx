import { http, HttpResponse } from "msw";
import { outseraApi } from "@/shared/infra/http-client";
import { ListMovies } from "./ListMovies";
import { MOVIE_1, MOVIE_2, MOVIE_3, MOVIE_4 } from "./__MOCKS__/list-movies";

export default {
  title: "Pages/List/components/ListMovies",
  component: ListMovies,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
  parameters: {
    msw: {
      handlers: [
        http.get(`${outseraApi.getUri()}/movies`, ({ request }) => {
          console.log(request.url);
          let MOCK_MOVIES = [MOVIE_1, MOVIE_2, MOVIE_3, MOVIE_4];
          const urls = new URL(request.url);

          const year = urls.searchParams.get("year");
          const winner = urls.searchParams.get("winner");

          if (winner) {
            if (winner === "true") {
              MOCK_MOVIES = MOCK_MOVIES.filter((movie) => movie.winner);
            } else {
              MOCK_MOVIES = MOCK_MOVIES.filter((movie) => !movie.winner);
            }
          }

          if (year) {
            MOCK_MOVIES = MOCK_MOVIES.filter(
              (movie) => movie.year === Number(year),
            );
          }

          return HttpResponse.json({
            content: MOCK_MOVIES,
            pageable: {
              sort: {
                sorted: false,
                unsorted: true,
              },
              pageSize: 0,
              pageNumber: 0,
              offset: 0,
              paged: true,
              unpaged: false,
            },
            totalElements: 999,
            last: false,
            totalPages: 1,
            first: true,
            sort: {
              sorted: false,
              unsorted: true,
            },
            number: 0,
            numberOfElements: 99,
            size: 4,
          });
        }),
      ],
    },
  },
};

const DefaultComponent = () => <ListMovies />;
export const Default = DefaultComponent.bind({});
