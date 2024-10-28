import { useGetYearsWithMoreThanOneWinner } from "@/modules/dashboard/hooks/use-get-list-years-with-multiple-winners";
import { Box } from "@/shared/components/Box";
import { Table } from "@/shared/components/Table";
import { Subtitle } from "@/shared/components/Titles";
import { randomId } from "@/shared/utils/randomId";
import { useMemo } from "react";

export function ListYearsWithMultipleWinners() {
  const columns = [
    { id: "year", value: "Year" },
    { id: "winCount", value: "Win Count" },
  ];

  const { years, isLoading } = useGetYearsWithMoreThanOneWinner();

  const rows = useMemo(
    () =>
      years?.map((year) => ({
        id: randomId(),
        columnsValues: [
          { id: "year", value: year.year },
          { id: "winCount", value: year.winnerCount },
        ],
      })) || [],
    [years],
  );

  return (
    <Box>
      <Subtitle text="List years with multiple winners" />

      <Table
        columns={columns}
        rows={rows}
        isLoading={isLoading}
        rowsLoading={3}
      />
    </Box>
  );
}
