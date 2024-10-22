import * as getTopTreeStudiosWithWinnersService from "@/dashboard/services/get-top-tree-studios-with-winners";
import { customRender } from "@/test/utils";
import { waitFor } from "@testing-library/react";
import { TopTreeStudiosWithWinners } from "./TopTreeStudiosWithWinners";

const getTopTreeStudiosWithWinnersServiceSpyOn = vi.spyOn(
  getTopTreeStudiosWithWinnersService.getTopTreeStudiosWithWinnersService,
  "execute",
);

const setup = () => {
  const utils = customRender(<TopTreeStudiosWithWinners />);

  return {
    utils,
  };
};

describe("TopTreeStudiosWithWinners", () => {
  beforeEach(() => {
    getTopTreeStudiosWithWinnersServiceSpyOn.mockResolvedValueOnce({
      studios: [
        {
          name: "Studio 1",
          winCount: 1,
        },
        {
          name: "Studio 2",
          winCount: 2,
        },
      ],
    });
  });
  it("should render correctly", () => {
    const { utils } = setup();

    expect(
      utils.getByText("Top Tree Studios With Winners"),
    ).toBeInTheDocument();
    expect(utils.getByText("Name")).toBeInTheDocument();
    expect(utils.getByText("Win Count")).toBeInTheDocument();
  });

  it("should show info on table", async () => {
    const { utils } = setup();

    await waitFor(() => {
      expect(utils.getByText("Studio 1")).toBeInTheDocument();
      expect(utils.getByText("1")).toBeInTheDocument();

      expect(utils.getByText("Studio 2")).toBeInTheDocument();
      expect(utils.getByText("2")).toBeInTheDocument();
    });
  });
});
