import { useGetMovies } from "@/modules/ListMovies/hooks/use-get-movies";
import { GetMoviesServiceRequest } from "@/modules/ListMovies/services/get-movies/types/Request";
import { Box } from "@/shared/components/Box";
import { Pagination } from "@/shared/components/Pagination";
import { Selection } from "@/shared/components/Selection";
import { Table } from "@/shared/components/Table";
import { TextInput } from "@/shared/components/TextInput";
import { TextInputDto } from "@/shared/components/TextInput/types/TextInput";
import { Subtitle } from "@/shared/components/Titles";
import { randomId } from "@/shared/utils/randomId";
import { useMemo, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { useDebounce } from "react-use";

export function ListMovies() {
  const [page, setPage] = useState<number>(1);
  const [yearToFilterField, setYearToFilterField] =
    useState<TextInputDto>(undefined);
  const [yearToFilter, setYearToFilter] = useState<TextInputDto>(undefined);

  const [isWinner, setIsWinner] = useState<GetMoviesServiceRequest["winner"]>();

  useDebounce(
    () => {
      setPage(1);
      setYearToFilter(yearToFilterField);
    },
    500,
    [yearToFilterField],
  );

  const columns = [
    { id: "id", value: "Id" },
    {
      id: "year",
      value: (
        <div className="flex flex-col gap-1">
          Year
          <TextInput
            data-testid="search-year"
            id="year"
            placeholder="Filter by Year"
            value={yearToFilterField || ""}
            onChange={setYearToFilterField}
            icon={<MdOutlineDateRange />}
            iconSide="left"
          />
        </div>
      ),
    },
    { id: "title", value: "Title" },
    {
      id: "winner",
      value: (
        <div className="flex flex-col gap-1">
          Winner?
          <Selection
            trigger={{ text: "Yes/No" }}
            options={[
              {
                options: [
                  {
                    text: "Yes",
                    value: "yes",
                  },
                  {
                    text: "No",
                    value: "no",
                  },
                ],
              },
            ]}
            value={isWinner}
            onValueChange={(
              selectedOption: GetMoviesServiceRequest["winner"],
            ) => {
              setPage(1);
              setIsWinner(selectedOption);
            }}
          />
        </div>
      ),
    },
  ];

  const { data, isLoading } = useGetMovies({
    rowsPerPage: 20,
    page,
    year: yearToFilter !== undefined ? Number(yearToFilter) : undefined,
    winner: isWinner as "yes" | "no" | "unassigned",
  });

  const rows = useMemo(
    () =>
      data?.movies.map((movie) => ({
        id: randomId(),
        columnsValues: [
          { id: "id", value: movie.id },
          { id: "year", value: movie.year },
          { id: "title", value: movie.title },
          { id: "winner", value: movie.winner ? "Yes" : "No" },
        ],
      })) || [],
    [data],
  );

  return (
    <Box>
      <Subtitle text="List movies" />

      <Table
        columns={columns}
        rows={rows}
        isLoading={isLoading}
        rowsLoading={20}
      />

      <Pagination
        onPageChange={setPage}
        totalPages={data?.pagination.totalPages || 1}
        currentPage={page}
      />
    </Box>
  );
}
