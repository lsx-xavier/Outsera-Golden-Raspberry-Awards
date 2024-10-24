import { http, HttpResponse } from "msw";
import { outseraApi } from "@/shared/infra/http-client";
import { TopTreeStudiosWithWinners } from "./TopTreeStudiosWithWinners";

export default {
  title: "Pages/Dashboard/components/TopTreeStudiosWithWinners",
  component: TopTreeStudiosWithWinners,
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
            studios: [
              {
                name: "Sophia",
                winCount: 1,
              },
              {
                name: "Murilo",
                winCount: 2,
              },
            ],
          }),
        ),
      ],
    },
  },
};

const DefaultComponent = () => <TopTreeStudiosWithWinners />;
export const Default = DefaultComponent.bind({});
