import { http, HttpResponse } from "msw";
import { outseraApi } from "@/shared/infra/http-client";
import { ListYearsWithMultipleWinners } from "./ListYearsWithMultipleWinners";

export default {
  title: "Pages/Dashboard/components/ListYearsWithMultipleWinners",
  component: ListYearsWithMultipleWinners,
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
        http.get(`${outseraApi.getUri()}/movies`, () =>
          HttpResponse.json({
            years: [
              {
                year: 1982,
                winnerCount: 1,
              },
              {
                year: 1983,
                winnerCount: 2,
              },
              {
                year: 1984,
                winnerCount: 3,
              },
            ],
          }),
        ),
      ],
    },
  },
};

const DefaultComponent = () => <ListYearsWithMultipleWinners />;
export const Default = DefaultComponent.bind({});
