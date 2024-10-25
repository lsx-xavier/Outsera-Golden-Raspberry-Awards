import * as getProducersMinMaxIntervalWinService from "@/modules/dashboard/services/get-producers-min-max-interval-win";
import { customRender } from "@/test/utils";
import { waitFor } from "@testing-library/react";
import { ProducersMinMaxIntervalWin } from "./ProducersMinMaxIntervalWin";

const getProducersMinMaxIntervalWinServiceSpyOn = vi.spyOn(
  getProducersMinMaxIntervalWinService.getProducersMinMaxIntervalWinService,
  "execute",
);

const setup = () => {
  const utils = customRender(<ProducersMinMaxIntervalWin />);

  return {
    utils,
  };
};

describe("ProducersMinMaxIntervalWin", () => {
  beforeEach(() => {
    getProducersMinMaxIntervalWinServiceSpyOn.mockResolvedValueOnce({
      max: [
        {
          producer: "Producer max 1",
          interval: 3,
          previousWin: 1981,
          followingWin: 1984,
        },
        {
          producer: "Producer max 2",
          interval: 4,
          previousWin: 1985,
          followingWin: 1989,
        },
      ],
      min: [
        {
          producer: "Producer min 1",
          interval: 1,
          previousWin: 1982,
          followingWin: 1983,
        },
        {
          producer: "Producer min 2",
          interval: 2,
          previousWin: 1986,
          followingWin: 1988,
        },
      ],
    });
  });
  it("should render correctly", () => {
    const { utils } = setup();

    expect(
      utils.getByText(
        "Producers with longest and shortest interval between wins",
      ),
    ).toBeInTheDocument();
    expect(utils.getByText("Maximum")).toBeInTheDocument();
    expect(utils.getByText("Minimum")).toBeInTheDocument();
    expect(utils.getAllByText("Producer")).toHaveLength(2);
    expect(utils.getAllByText("Interval")).toHaveLength(2);
    expect(utils.getAllByText("Previous year")).toHaveLength(2);
    expect(utils.getAllByText("Following year")).toHaveLength(2);
  });

  it("should show info on table", async () => {
    const { utils } = setup();

    await waitFor(() => {
      expect(utils.getByText("Producer max 1")).toBeInTheDocument();
      expect(utils.getByText("3")).toBeInTheDocument();
      expect(utils.getByText("1981")).toBeInTheDocument();
      expect(utils.getByText("1984")).toBeInTheDocument();

      expect(utils.getByText("Producer max 2")).toBeInTheDocument();
      expect(utils.getByText("4")).toBeInTheDocument();
      expect(utils.getByText("1985")).toBeInTheDocument();
      expect(utils.getByText("1989")).toBeInTheDocument();

      expect(utils.getByText("Producer min 1")).toBeInTheDocument();
      expect(utils.getByText("1")).toBeInTheDocument();
      expect(utils.getByText("1982")).toBeInTheDocument();
      expect(utils.getByText("1983")).toBeInTheDocument();

      expect(utils.getByText("Producer min 2")).toBeInTheDocument();
      expect(utils.getByText("2")).toBeInTheDocument();
      expect(utils.getByText("1982")).toBeInTheDocument();
      expect(utils.getByText("1985")).toBeInTheDocument();
    });
  });
});
