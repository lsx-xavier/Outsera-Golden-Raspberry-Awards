import { useState } from "react";
import { useDebounce } from "react-use";
import {
  MdOutlineFirstPage,
  MdOutlineLastPage,
  MdOutlineNavigateBefore,
  MdOutlineNavigateNext,
} from "react-icons/md";
import { Button } from "../Button";
import {
  pageButtonDirectionsStyle,
  pageButtonNumberStyle,
  paginationStyles,
} from "./styles/Pagination";
import { PaginationProps } from "./types/Pagination";
import { getPaginationInterval } from "./helpers/getPaginationInterval";

export function Pagination({
  currentPage: currentPageProp = 1,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(currentPageProp);
  const totalPagesParsed = totalPages - 1 || 1;

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

  if (totalPages < 2) return null;

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
      >
        <MdOutlineFirstPage />
      </Button>
      <Button
        className={pageButtonDirectionsStyle({
          disabled: currentPage === 1,
        })}
        onClick={() => {
          if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
            onPageChange(currentPage - 1);
          }
        }}
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
        className={pageButtonDirectionsStyle({
          disabled: currentPage === totalPagesParsed,
        })}
        onClick={() => {
          if (currentPage !== totalPagesParsed) {
            setCurrentPage(currentPage + 1);
            onPageChange(currentPage + 1);
          }
        }}
      >
        <MdOutlineNavigateNext />
      </Button>
      <Button
        className={pageButtonDirectionsStyle({
          disabled: currentPage === totalPagesParsed,
        })}
        onClick={() => {
          if (currentPage !== totalPages) {
            setCurrentPage(totalPagesParsed);
            onPageChange(totalPagesParsed);
          }
        }}
      >
        <MdOutlineLastPage />
      </Button>
    </div>
  );
}
