import * as getListMovieByYearServiceSpyOn from "@/modules/dashboard/services/get-list-movie-by-year";
import { customRender } from "@/test/utils";
import { fireEvent, waitFor } from "@testing-library/react";
import { ListMovieByYear } from "./ListMovieByYear";

const getListMovieByYearServiceSpyOnMock = vi.spyOn(
  getListMovieByYearServiceSpyOn.getListMovieByYearService,
  "execute",
);

const setup = () => {
  const utils = customRender(<ListMovieByYear />);

  return {
    utils,
  };
};

describe("ListMovieByYear", () => {
  it("should render correctly", () => {
    const { utils } = setup();

    expect(utils.getByText("List Movies By Year")).toBeInTheDocument();
    expect(
      utils.getByText("You need to search for a year"),
    ).toBeInTheDocument();
    expect(utils.getByPlaceholderText("Search by year")).toBeInTheDocument();
    expect(utils.getByText("Id")).toBeInTheDocument();
    expect(utils.getByText("Year")).toBeInTheDocument();
    expect(utils.getByText("Title")).toBeInTheDocument();
  });

  it("should show info on table when search for a year", async () => {
    const { utils } = setup();

    const searchInput = utils.getByPlaceholderText("Search by year");
    fireEvent.change(searchInput, { target: { value: "1982" } });

    const searchButton = utils.getByTestId("search-button");
    fireEvent.click(searchButton);

    getListMovieByYearServiceSpyOnMock.mockResolvedValueOnce({
      movie: [
        {
          id: 1,
          year: 1982,
          title: "Title 1",
          studios: [],
          producers: [],
          winner: true,
        },
      ],
    });

    await waitFor(() => {
      expect(utils.getAllByText("1982")).toHaveLength(1);
      expect(utils.getByText("1")).toBeInTheDocument();
      expect(utils.getByText("Title 1")).toBeInTheDocument();
    });
  });
  it("should show empty info above the table when search for a year that don't have results", async () => {
    const { utils } = setup();

    const searchInput = utils.getByPlaceholderText("Search by year");
    fireEvent.change(searchInput, { target: { value: "2020" } });

    const searchButton = utils.getByTestId("search-button");
    fireEvent.click(searchButton);

    getListMovieByYearServiceSpyOnMock.mockResolvedValueOnce({
      movie: [],
    });

    await waitFor(() => {
      expect(utils.getByText("There are no results")).toBeInTheDocument();
    });
  });
});
