import * as useGetMovies from "@/modules/ListMovies/hooks/use-get-movies";
import { customRender } from "@/test/utils";
import { fireEvent, waitFor } from "@testing-library/react";
import { act } from "react";
import { ListMovies } from "./ListMovies";
import { MOVIE_1, MOVIE_2, MOVIE_3, MOVIE_4 } from "./__MOCKS__/list-movies";

const useGetMoviesSpyOn = vi.spyOn(useGetMovies, "useGetMovies");

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

afterEach(() => {
  useGetMoviesSpyOn.mockReset();
});

describe("ListMovies", () => {
  it("should show info on table when using both filters", async () => {
    useGetMoviesSpyOn.mockReturnValue({
      data: {
        movies: [MOVIE_1, MOVIE_2, MOVIE_3, MOVIE_4],
        pagination: {
          pageNumber: 1,
          size: 10,
          totalPages: 1,
          totalElements: 0,
        },
      },
      isLoading: false,
    });
    const { utils, searchYearInput, winnerSelectionTrigger } = setup();

    await waitFor(() => {
      expect(utils.getByText("100")).toBeInTheDocument();
      expect(utils.getByText("Title 1")).toBeInTheDocument();
      expect(utils.getByText("1982")).toBeInTheDocument();

      expect(utils.getByText("200")).toBeInTheDocument();
      expect(utils.getByText("Title 2")).toBeInTheDocument();
      expect(utils.getByText("No")).toBeInTheDocument();

      expect(utils.getByText("201")).toBeInTheDocument();
      expect(utils.getByText("Title 3")).toBeInTheDocument();

      expect(utils.getByText("202")).toBeInTheDocument();
      expect(utils.getByText("Title 4")).toBeInTheDocument();

      expect(utils.getAllByText("1983")).toHaveLength(3);
      expect(utils.getAllByText("Yes")).toHaveLength(3);
    });

    fireEvent.click(winnerSelectionTrigger);
    const winnerSelectionContent = utils.getByTestId("selection-content");
    expect(winnerSelectionContent).toBeInTheDocument();
    const yesOption = utils.getByTestId("yes");

    useGetMoviesSpyOn.mockReturnValue({
      data: {
        movies: [MOVIE_3, MOVIE_4],
        pagination: {
          pageNumber: 1,
          size: 10,
          totalPages: 1,
          totalElements: 0,
        },
      },
      isLoading: false,
    });

    fireEvent.click(yesOption);

    fireEvent.change(searchYearInput, { target: { value: "1983" } });
    expect(searchYearInput).toHaveValue("1983");

    await waitFor(() => {
      expect(utils.queryByText("100")).not.toBeInTheDocument();
      expect(utils.queryByText("Title 1")).not.toBeInTheDocument();
      expect(utils.queryByText("1982")).not.toBeInTheDocument();
      expect(utils.getAllByText("Yes")).toHaveLength(3);

      expect(utils.queryByText("200")).not.toBeInTheDocument();
      expect(utils.queryByText("Title 2")).not.toBeInTheDocument();
      expect(utils.getAllByText("1983")).toHaveLength(2);
      expect(utils.queryByText("No")).not.toBeInTheDocument();

      expect(utils.getByText("201")).toBeInTheDocument();
      expect(utils.getByText("Title 3")).toBeInTheDocument();

      expect(utils.getByText("202")).toBeInTheDocument();
      expect(utils.getByText("Title 4")).toBeInTheDocument();
    });

    useGetMoviesSpyOn.mockReturnValue({
      data: {
        movies: [],
        pagination: {
          pageNumber: 1,
          size: 10,
          totalPages: 1,
          totalElements: 0,
        },
      },
      isLoading: false,
    });

    fireEvent.change(searchYearInput, { target: { value: "2000" } });
    expect(searchYearInput).toHaveValue("2000");

    await waitFor(() => {
      expect(utils.queryByText("100")).not.toBeInTheDocument();
      expect(utils.queryByText("Title 1")).not.toBeInTheDocument();
      expect(utils.queryByText("1982")).not.toBeInTheDocument();
      expect(utils.queryAllByText("Yes")).toHaveLength(1);

      expect(utils.queryByText("200")).not.toBeInTheDocument();
      expect(utils.queryByText("Title 2")).not.toBeInTheDocument();
      expect(utils.queryAllByText("1983")).toHaveLength(0);
      expect(utils.queryByText("No")).not.toBeInTheDocument();

      expect(utils.queryByText("201")).not.toBeInTheDocument();
      expect(utils.queryByText("Title 3")).not.toBeInTheDocument();

      expect(utils.queryByText("202")).not.toBeInTheDocument();
      expect(utils.queryByText("Title 4")).not.toBeInTheDocument();
    });
  });

  it("should render correctly", () => {
    useGetMoviesSpyOn.mockReturnValue({
      data: {
        movies: [],
        pagination: {
          pageNumber: 1,
          size: 10,
          totalPages: 1,
          totalElements: 0,
        },
      },
      isLoading: false,
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
    useGetMoviesSpyOn.mockReturnValue({
      data: {
        movies: [MOVIE_1, MOVIE_2],
        pagination: {
          pageNumber: 1,
          size: 10,
          totalPages: 1,
          totalElements: 0,
        },
      },
      isLoading: false,
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

    useGetMoviesSpyOn.mockReturnValue({
      data: {
        movies: [MOVIE_1],
        pagination: {
          pageNumber: 1,
          size: 10,
          totalPages: 1,
          totalElements: 0,
        },
      },
      isLoading: false,
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

    useGetMoviesSpyOn.mockReturnValue({
      data: {
        movies: [MOVIE_2],
        pagination: {
          pageNumber: 1,
          size: 10,
          totalPages: 1,
          totalElements: 0,
        },
      },
      isLoading: false,
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
    useGetMoviesSpyOn.mockReturnValue({
      data: {
        movies: [MOVIE_1, MOVIE_2],
        pagination: {
          pageNumber: 1,
          size: 10,
          totalPages: 1,
          totalElements: 0,
        },
      },
      isLoading: false,
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
    useGetMoviesSpyOn.mockReturnValue({
      data: {
        movies: [MOVIE_1],
        pagination: {
          pageNumber: 1,
          size: 10,
          totalPages: 1,
          totalElements: 0,
        },
      },
      isLoading: false,
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
    useGetMoviesSpyOn.mockReturnValue({
      data: {
        movies: [MOVIE_2],
        pagination: {
          pageNumber: 1,
          size: 10,
          totalPages: 1,
          totalElements: 0,
        },
      },
      isLoading: false,
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
