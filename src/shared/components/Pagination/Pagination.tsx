import { useState } from "react";
import {
  MdOutlineFirstPage,
  MdOutlineLastPage,
  MdOutlineNavigateBefore,
  MdOutlineNavigateNext,
} from "react-icons/md";
import { useDebounce } from "react-use";
import { Button } from "../Button";
import { getPaginationInterval } from "./helpers/getPaginationInterval";
import {
  pageButtonDirectionsStyle,
  pageButtonNumberStyle,
  paginationStyles,
} from "./styles/Pagination";
import { PaginationProps } from "./types/Pagination";

export function Pagination({
  currentPage: currentPageProp = 0,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(currentPageProp);
  const totalPagesParsed = totalPages || 1;

  useDebounce(
    () => {
      onPageChange(currentPage);
    },
    500,
    [currentPage],
  );

  const [from, to] = getPaginationInterval(currentPage, totalPagesParsed);

  const arrayOfPages = Array.from(
    { length: totalPagesParsed },
    (_, i) => i + 1,
  ).slice(from - 1, to);

  if (totalPages === 1) return null;

  return (
    <div className={paginationStyles()}>
      <Button
        aria-disabled={currentPage === 1}
        className={pageButtonDirectionsStyle({
          disabled: currentPage === 1,
        })}
        onClick={() => {
          if (currentPage !== 1) {
            setCurrentPage(1);
            onPageChange(1);
          }
        }}
        data-testid="first-page"
      >
        <MdOutlineFirstPage />
      </Button>
      <Button
        aria-disabled={currentPage === 1}
        className={pageButtonDirectionsStyle({
          disabled: currentPage === 1,
        })}
        onClick={() => {
          if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
            onPageChange(currentPage - 1);
          }
        }}
        data-testid="previous-page"
      >
        <MdOutlineNavigateBefore />
      </Button>

      {arrayOfPages.map((item) => (
        <Button
          key={item}
          className={pageButtonNumberStyle({ current: item === currentPage })}
          onClick={() => setCurrentPage(item)}
        >
          {item}
        </Button>
      ))}

      <Button
        aria-disabled={currentPage === totalPagesParsed}
        className={pageButtonDirectionsStyle({
          disabled: currentPage === totalPagesParsed,
        })}
        onClick={() => {
          if (currentPage !== totalPagesParsed) {
            setCurrentPage(currentPage + 1);
            onPageChange(currentPage + 1);
          }
        }}
        data-testid="next-page"
      >
        <MdOutlineNavigateNext />
      </Button>
      <Button
        aria-disabled={currentPage === totalPagesParsed}
        className={pageButtonDirectionsStyle({
          disabled: currentPage === totalPagesParsed,
        })}
        onClick={() => {
          if (currentPage !== totalPages) {
            setCurrentPage(totalPagesParsed);
            onPageChange(totalPagesParsed);
          }
        }}
        data-testid="last-page"
      >
        <MdOutlineLastPage />
      </Button>
    </div>
  );
}
