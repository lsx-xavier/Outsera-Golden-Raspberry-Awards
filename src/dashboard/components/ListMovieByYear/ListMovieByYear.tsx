import { useGetListMovieByYear } from "@/dashboard/hooks/use-get-list-movie-by-year";
import { Box } from "@/shared/components/Box";
import { Button } from "@/shared/components/Button";
import { Form } from "@/shared/components/Form";
import { Table } from "@/shared/components/Table";
import { Subtitle } from "@/shared/components/Titles";
import { randomId } from "@/shared/utils/randomId";
import { useMemo } from "react";
import { MdOutlineBlock, MdOutlineSearch } from "react-icons/md";
import { z } from "zod";

const ValidationSchema = z.object({
  year: z.string().min(4, "Year has 4 number").max(4, "Year has 4 number"),
});

export function ListMovieByYear() {
  const columns = [
    { id: "id", value: "Id" },
    { id: "year", value: "Year" },
    { id: "title", value: "Title" },
  ];

  const { movie, searchMovie, isLoading } = useGetListMovieByYear();

  const rows = useMemo(
    () =>
      movie?.map((item) => ({
        id: randomId(),
        columnsValues: [
          { id: "id", value: item.id },
          { id: "year", value: item.year },
          { id: "title", value: item.title },
        ],
      })) || [],
    [movie],
  );

  const handleSubmit = (values: any) => {
    searchMovie(values);
  };

  return (
    <Box>
      <Subtitle text="List Movies By Year" />

      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-500">You need to search for a year</p>

        <div className="flex flex-row gap-2 items-center">
          <Form.Root validation={ValidationSchema} onSubmit={handleSubmit}>
            <Form.TextField
              name="year"
              className="flex-1"
              placeholder="Search by year"
            />
          </Form.Root>

          <Button
            type="submit"
            className="py-3 px-3 bg-blue-600 text-white hover:bg-blue-700"
            data-testid="search-button"
          >
            <MdOutlineSearch />
          </Button>
        </div>

        <Table
          columns={columns}
          rows={rows}
          isLoading={isLoading === "pending"}
          rowsLoading={3}
        />

        {isLoading === "success" && rows.length === 0 && (
          <div className="flex flex-col gap-2 justify-center items-center w-full mt-3">
            <MdOutlineBlock />
            <p>There are no results</p>
          </div>
        )}
      </div>
    </Box>
  );
}
