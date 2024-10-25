import { http, HttpResponse } from "msw";
import { outseraApi } from "@/shared/infra/http-client";
import { ProducersMinMaxIntervalWin } from "./ProducersMinMaxIntervalWin";

export default {
  title: "Pages/Dashboard/components/ProducersMinMaxIntervalWin",
  component: ProducersMinMaxIntervalWin,
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
            min: [
              {
                producer: "Sophia",
                interval: 1,
                previousWin: 2018,
                followingWin: 2019,
              },
              {
                producer: "Murilo",
                interval: 2,
                previousWin: 2018,
                followingWin: 2019,
              },
            ],
            max: [
              {
                producer: "Gúbio",
                interval: 1,
                previousWin: 2018,
                followingWin: 2019,
              },
              {
                producer: "Rafaela",
                interval: 2,
                previousWin: 2018,
                followingWin: 2019,
              },
            ],
          }),
        ),
      ],
    },
  },
};

const DefaultComponent = () => <ProducersMinMaxIntervalWin />;
export const Default = DefaultComponent.bind({});
