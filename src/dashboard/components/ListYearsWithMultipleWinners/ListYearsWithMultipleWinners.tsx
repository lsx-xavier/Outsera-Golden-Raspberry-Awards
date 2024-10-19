import { Box } from "@/shared/components/Box";
import { Table } from "@/shared/components/Table";
import { Subtitle } from "@/shared/components/Titles";

export function ListYearsWithMultipleWinners() {
  const columns = [
    { id: "1", value: "Year" },
    { id: "2", value: "Win Count" },
  ];

  return (
    <Box>
      <Subtitle text="List Years With Multiple Winners" />

      <Table columns={columns} rows={[]} />
    </Box>
  );
}
