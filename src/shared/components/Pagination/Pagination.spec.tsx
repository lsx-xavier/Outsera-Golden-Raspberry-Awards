import { customRender } from "@/test/utils";
import { fireEvent } from "@testing-library/react";
import { Pagination } from "./Pagination";

const setup = (totalPages = 10) => {
  const handlePageChange = vi.fn();
  const utils = customRender(
    <Pagination
      currentPage={1}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />,
  );

  return {
    utils,
    handlePageChange,
  };
};

describe("Pagination", () => {
  it("should render correctly", () => {
    const { utils } = setup(10);

    Array.from({ length: 10 }, (_, i) => i + 1).forEach((page) => {
      expect(utils.getByText(page.toString())).toBeInTheDocument();
    });
  });

  it("should not render when totalPages is 1", () => {
    const { utils } = setup(1);

    Array.from({ length: 1 }, (_, i) => i + 1).forEach((page) => {
      expect(utils.queryByText(page.toString())).not.toBeInTheDocument();
    });
  });

  it("should call handlePageChange when click on a page", () => {
    const { utils, handlePageChange } = setup(10);

    const firsPage = utils.getByTestId("first-page");
    const previousPage = utils.getByTestId("previous-page");
    const nextPage = utils.getByTestId("next-page");
    const lastPage = utils.getByTestId("last-page");

    expect(firsPage.getAttribute("aria-disabled")).toBe("true");
    expect(previousPage.getAttribute("aria-disabled")).toBe("true");
    expect(nextPage.getAttribute("aria-disabled")).toBe("false");
    expect(lastPage.getAttribute("aria-disabled")).toBe("false");

    fireEvent.click(nextPage);

    expect(handlePageChange).toHaveBeenCalledWith(2);
    fireEvent.click(lastPage);
    expect(handlePageChange).toHaveBeenCalledWith(10);
    fireEvent.click(previousPage);
    expect(handlePageChange).toHaveBeenCalledWith(9);
    fireEvent.click(firsPage);
    expect(handlePageChange).toHaveBeenCalledWith(1);
  });
});
