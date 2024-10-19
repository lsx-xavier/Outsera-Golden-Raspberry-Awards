import { Box } from "@/shared/components/Box";
import { Table } from "@/shared/components/Table";
import { Subtitle } from "@/shared/components/Titles";

export function ListMovieByYear() {
  const columns = [
    { id: "1", value: "Id" },
    { id: "2", value: "Year" },
    { id: "3", value: "Title" },
  ];

  return (
    <Box>
      <Subtitle text="List Movies By Year" />

      <Table columns={columns} rows={[]} />
    </Box>
  );
}
