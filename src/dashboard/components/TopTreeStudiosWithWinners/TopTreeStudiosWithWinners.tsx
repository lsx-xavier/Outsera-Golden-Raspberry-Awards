import { Box } from "@/shared/components/Box";
import { Table } from "@/shared/components/Table";
import { Subtitle } from "@/shared/components/Titles";

export function TopTreeStudiosWithWinners() {
  const columns = [
    { id: "1", value: "Name" },
    { id: "2", value: "Win Count" },
  ];

  return (
    <Box>
      <Subtitle text="Top Tree Studios With Winners" />

      <Table columns={columns} rows={[]} />
    </Box>
  );
}
