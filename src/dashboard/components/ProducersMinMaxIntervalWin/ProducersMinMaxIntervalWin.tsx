import { useGetProducersMinMaxIntervalWin } from "@/dashboard/hooks/use-get-producers-min-max-interval-win";
import { Box } from "@/shared/components/Box";
import { Table } from "@/shared/components/Table";
import { Legend, Subtitle } from "@/shared/components/Titles";
import { randomId } from "@/shared/utils/randomId";
import { useMemo } from "react";

export function ProducersMinMaxIntervalWin() {
  const columns = [
    { id: "producer", value: "Producer" },
    { id: "interval", value: "Interval" },
    { id: "previousYear", value: "Previous year" },
    { id: "followingYear", value: "Following year" },
  ];

  const { average, isLoading } = useGetProducersMinMaxIntervalWin();

  const rowsMax = useMemo(
    () =>
      average?.max.map((item) => ({
        id: randomId(),
        columnsValues: [
          { id: "producer", value: item.producer },
          { id: "interval", value: item.interval },
          { id: "previousYear", value: item.previousWin },
          { id: "followingYear", value: item.followingWin },
        ],
      })) || [],
    [average],
  );

  const rowsMin = useMemo(
    () =>
      average?.min.map((item) => ({
        id: randomId(),
        columnsValues: [
          { id: "producer", value: item.producer },
          { id: "interval", value: item.interval },
          { id: "previousYear", value: item.previousWin },
          { id: "followingYear", value: item.followingWin },
        ],
      })) || [],
    [average],
  );

  return (
    <Box>
      <Subtitle
        className="mb-2"
        text="Producers with longest and shortest interval between wins"
      />

      <div className="flex flex-col gap-1">
        <Legend text="Maximum" />

        <Table
          columns={columns}
          rows={rowsMax}
          isLoading={isLoading}
          rowsLoading={1}
        />
      </div>

      <div className="flex flex-col gap-1 mt-2">
        <Legend text="Minimum" />

        <Table
          columns={columns}
          rows={rowsMin}
          isLoading={isLoading}
          rowsLoading={1}
        />
      </div>
    </Box>
  );
}
