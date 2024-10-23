import * as getMoviesService from "@/ListMovies/services/get-movies";
import { customRender } from "@/test/utils";
import { fireEvent, waitFor } from "@testing-library/react";
import { act } from "react";

import { ListMovies } from "./ListMovies";
import { MOVIE_1, MOVIE_2 } from "./__MOCKS__/list-movies";

const getMoviesServiceSpyOn = vi.spyOn(
  getMoviesService.getMoviesService,
  "execute",
);

vi.mock("react-use", (reactUse) => ({
  ...reactUse,
  useDebounce: vi.fn((fn, delay) => {
    setTimeout(fn, delay);
  }), // Mock useDebounce to return the value immediately
}));

const setup = () => {
  const utils = customRender(<ListMovies />);
  const searchYearInput = utils.getByTestId("search-year");
  const winnerSelectionTrigger = utils.getByTestId("selection-trigger");

  return {
    utils,
    searchYearInput,
    winnerSelectionTrigger,
  };
};

beforeEach(() => {
  getMoviesServiceSpyOn.mockReset();
});

describe("ListMovies", () => {
  it("should render correctly", () => {
    getMoviesServiceSpyOn.mockResolvedValue({
      movies: [MOVIE_1, MOVIE_2],
      pagination: {
        pageNumber: 1,
        size: 10,
        totalPages: 1,
        totalElements: 0,
      },
    });
    const { utils, searchYearInput, winnerSelectionTrigger } = setup();

    expect(utils.getByText("List Movies By Year")).toBeInTheDocument();

    expect(utils.getByText("Id")).toBeInTheDocument();
    expect(utils.getByText("Year")).toBeInTheDocument();
    expect(searchYearInput).toBeInTheDocument();
    expect(utils.getByText("Title")).toBeInTheDocument();
    expect(utils.getByText("Winner?")).toBeInTheDocument();

    expect(winnerSelectionTrigger).toBeInTheDocument();
    expect(utils.queryByTestId("selection-content")).not.toBeInTheDocument();
    fireEvent.click(winnerSelectionTrigger);

    const winnerSelectionContent = utils.getByTestId("selection-content");

    expect(winnerSelectionContent).toBeInTheDocument();

    expect(utils.getByText("Yes")).toBeInTheDocument();
    expect(utils.getByText("No")).toBeInTheDocument();
  });

  it("should show info on table when search by year", async () => {
    getMoviesServiceSpyOn.mockResolvedValue({
      movies: [MOVIE_1, MOVIE_2],
      pagination: {
        pageNumber: 1,
        size: 10,
        totalPages: 1,
        totalElements: 0,
      },
    });
    const { utils, searchYearInput } = setup();

    await waitFor(() => {
      expect(utils.getByText("100")).toBeInTheDocument();
      expect(utils.getByText("Title 1")).toBeInTheDocument();
      expect(utils.getByText("1982")).toBeInTheDocument();
      expect(utils.getByText("Yes")).toBeInTheDocument();

      expect(utils.getByText("200")).toBeInTheDocument();
      expect(utils.getByText("Title 2")).toBeInTheDocument();
      expect(utils.getByText("1983")).toBeInTheDocument();
      expect(utils.getByText("No")).toBeInTheDocument();
    });

    getMoviesServiceSpyOn.mockResolvedValue({
      movies: [MOVIE_1],
      pagination: {
        pageNumber: 1,
        size: 10,
        totalPages: 1,
        totalElements: 0,
      },
    });

    fireEvent.change(searchYearInput, { target: { value: "1982" } });
    expect(searchYearInput).toHaveValue("1982");

    await waitFor(() => {
      expect(utils.getByText("100")).toBeInTheDocument();
      expect(utils.getByText("Title 1")).toBeInTheDocument();
      expect(utils.getByText("1982")).toBeInTheDocument();
      expect(utils.getByText("Yes")).toBeInTheDocument();

      expect(utils.queryByText("200")).not.toBeInTheDocument();
      expect(utils.queryByText("Title 2")).not.toBeInTheDocument();
      expect(utils.queryByText("1983")).not.toBeInTheDocument();
      expect(utils.queryByText("No")).not.toBeInTheDocument();
    });

    fireEvent.change(searchYearInput, { target: { value: "1983" } });

    getMoviesServiceSpyOn.mockResolvedValue({
      movies: [MOVIE_2],
      pagination: {
        pageNumber: 1,
        size: 10,
        totalPages: 1,
        totalElements: 0,
      },
    });

    await waitFor(() => {
      expect(utils.queryByText("100")).not.toBeInTheDocument();
      expect(utils.queryByText("Title 1")).not.toBeInTheDocument();
      expect(utils.queryByText("1982")).not.toBeInTheDocument();
      expect(utils.queryByText("Yes")).not.toBeInTheDocument();

      expect(utils.getByText("200")).toBeInTheDocument();
      expect(utils.getByText("Title 2")).toBeInTheDocument();
      expect(utils.getByText("1983")).toBeInTheDocument();
      expect(utils.getByText("No")).toBeInTheDocument();
    });
  });

  it("should show info on table when select if is winner or not", async () => {
    getMoviesServiceSpyOn.mockResolvedValue({
      movies: [MOVIE_1, MOVIE_2],
      pagination: {
        pageNumber: 1,
        size: 10,
        totalPages: 1,
        totalElements: 0,
      },
    });
    const { utils, winnerSelectionTrigger } = setup();

    await waitFor(() => {
      expect(utils.getByText("100")).toBeInTheDocument();
      expect(utils.getByText("Title 1")).toBeInTheDocument();
      expect(utils.getByText("1982")).toBeInTheDocument();
      expect(utils.getByText("Yes")).toBeInTheDocument();

      expect(utils.queryByText("200")).toBeInTheDocument();
      expect(utils.queryByText("Title 2")).toBeInTheDocument();
      expect(utils.queryByText("1983")).toBeInTheDocument();
      expect(utils.queryByText("No")).toBeInTheDocument();
    });

    fireEvent.click(winnerSelectionTrigger);
    const winnerSelectionContent = utils.getByTestId("selection-content");

    expect(winnerSelectionContent).toBeInTheDocument();

    const yesOption = utils.getByTestId("yes");
    getMoviesServiceSpyOn.mockResolvedValue({
      movies: [
        {
          id: 100,
          year: 1982,
          title: "Title 1",
          studios: [],
          producers: [],
          winner: true,
        },
      ],
      pagination: {
        pageNumber: 1,
        size: 10,
        totalPages: 2,
        totalElements: 1,
      },
    });
    expect(yesOption).toBeInTheDocument();
    act(() => {
      fireEvent.click(yesOption);
    });

    await waitFor(() => {
      expect(utils.getByText("100")).toBeInTheDocument();
      expect(utils.getByText("Title 1")).toBeInTheDocument();
      expect(utils.getByText("1982")).toBeInTheDocument();
      expect(utils.getAllByText("Yes")).toHaveLength(2);

      expect(utils.queryByText("200")).not.toBeInTheDocument();
      expect(utils.queryByText("Title 2")).not.toBeInTheDocument();
      expect(utils.queryByText("1983")).not.toBeInTheDocument();
      expect(utils.queryByText("No")).not.toBeInTheDocument();
    });

    fireEvent.click(winnerSelectionTrigger);
    const noOption = utils.getByTestId("no");
    getMoviesServiceSpyOn.mockResolvedValue({
      movies: [
        {
          id: 200,
          year: 1983,
          title: "Title 2",
          studios: [],
          producers: [],
          winner: false,
        },
      ],
      pagination: {
        pageNumber: 1,
        size: 10,
        totalPages: 2,
        totalElements: 1,
      },
    });
    expect(noOption).toBeInTheDocument();
    act(() => {
      fireEvent.click(noOption);
    });

    await waitFor(() => {
      expect(utils.queryByText("100")).not.toBeInTheDocument();
      expect(utils.queryByText("Title 1")).not.toBeInTheDocument();
      expect(utils.queryByText("1982")).not.toBeInTheDocument();
      expect(utils.queryAllByText("Yes")).toHaveLength(0);

      expect(utils.getByText("200")).toBeInTheDocument();
      expect(utils.getByText("Title 2")).toBeInTheDocument();
      expect(utils.getByText("1983")).toBeInTheDocument();
      expect(utils.getAllByText("No")).toHaveLength(2);
    });
  });
});
