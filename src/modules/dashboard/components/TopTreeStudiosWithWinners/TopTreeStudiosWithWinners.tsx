import { useGetTopTreeStudiosWithWinners } from "@/modules/dashboard/hooks/use-get-top-tree-studios-with-winners";
import { Box } from "@/shared/components/Box";
import { Table } from "@/shared/components/Table";
import { Subtitle } from "@/shared/components/Titles";
import { randomId } from "@/shared/utils/randomId";
import { useMemo } from "react";

export function TopTreeStudiosWithWinners() {
  const columns = [
    { id: "name", value: "Name" },
    { id: "winCount", value: "Win Count" },
  ];

  const { studios, isLoading } = useGetTopTreeStudiosWithWinners({
    limit: 3,
    orderBy: "DESC",
    sortBy: "winCount",
  });

  const rows = useMemo(
    () =>
      studios?.map((studio) => ({
        id: randomId(),
        columnsValues: [
          { id: "name", value: studio.name },
          { id: "winCount", value: studio.winCount },
        ],
      })) || [],
    [studios],
  );

  return (
    <Box>
      <Subtitle text="Top Tree Studios With Winners" />

      <Table
        columns={columns}
        rows={rows}
        isLoading={isLoading}
        rowsLoading={3}
      />
    </Box>
  );
}
