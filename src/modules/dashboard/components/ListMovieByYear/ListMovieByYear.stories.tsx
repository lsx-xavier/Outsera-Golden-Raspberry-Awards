import { http, HttpResponse } from "msw";
import { outseraApi } from "@/shared/infra/http-client";
import { ListMovieByYear } from "./ListMovieByYear";

export default {
  title: "Pages/Dashboard/components/ListMovieByYear",
  component: ListMovieByYear,
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
          const urls = new URL(request.url);

          const year = urls.searchParams.get("year");

          if (year) {
            return HttpResponse.json([
              {
                id: 1,
                year,
                title: "Title 1",
                studios: [],
                producers: [],
                winner: true,
              },
              {
                id: 2,
                year,
                title: "Title 2",
                studios: [],
                producers: [],
                winner: true,
              },
              {
                id: 3,
                year,
                title: "Title 3",
                studios: [],
                producers: [],
                winner: true,
              },
            ]);
          }

          return new HttpResponse(null, { status: 404 });
        }),
      ],
    },
  },
};

const DefaultComponent = () => <ListMovieByYear />;
export const Default = DefaultComponent.bind({});
