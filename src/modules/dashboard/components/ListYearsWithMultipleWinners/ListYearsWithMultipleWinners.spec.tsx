import * as getListYearsWithMultipleWinnersService from "@/modules/dashboard/services/get-list-years-with-multiple-winners";
import { customRender } from "@/test/utils";
import { waitFor } from "@testing-library/react";
import { ListYearsWithMultipleWinners } from "./ListYearsWithMultipleWinners";

const getListYearsWithMultipleWinnersServiceSpyOn = vi.spyOn(
  getListYearsWithMultipleWinnersService.getListYearsWithMultipleWinnersService,
  "execute",
);

const setup = () => {
  const utils = customRender(<ListYearsWithMultipleWinners />);

  return {
    utils,
  };
};

describe("ListYearsWithMultipleWinners", () => {
  beforeEach(() => {
    getListYearsWithMultipleWinnersServiceSpyOn.mockResolvedValueOnce({
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
    });
  });
  it("should render correctly", () => {
    const { utils } = setup();

    expect(
      utils.getByText("List Years With Multiple Winners"),
    ).toBeInTheDocument();
    expect(utils.getByText("Year")).toBeInTheDocument();
    expect(utils.getByText("Win Count")).toBeInTheDocument();
  });

  it("should show info on table", async () => {
    const { utils } = setup();

    await waitFor(() => {
      expect(utils.getByText("1982")).toBeInTheDocument();
      expect(utils.getByText("1")).toBeInTheDocument();
      expect(utils.getAllByText("1983")).toHaveLength(1);
      expect(utils.getByText("2")).toBeInTheDocument();
      expect(utils.getAllByText("1984")).toHaveLength(1);
      expect(utils.getByText("3")).toBeInTheDocument();
    });
  });
});
