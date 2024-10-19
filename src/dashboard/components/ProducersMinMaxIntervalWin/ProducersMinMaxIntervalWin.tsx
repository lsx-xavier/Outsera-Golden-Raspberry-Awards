import { Box } from "@/shared/components/Box";
import { Table } from "@/shared/components/Table";
import { Legend, Subtitle } from "@/shared/components/Titles";

export function ProducersMinMaxIntervalWin() {
  const columns = [
    { id: "1", value: "Producer" },
    { id: "2", value: "Interval" },
    { id: "3", value: "Previous year" },
    { id: "4", value: "Following year" },
  ];

  return (
    <Box>
      <Subtitle
        className="mb-2"
        text="Producers with longest and shortest interval between wins"
      />

      <div className="flex flex-col gap-1">
        <Legend text="Maximum" />

        <Table columns={columns} rows={[]} />
      </div>

      <div className="flex flex-col gap-1 mt-2">
        <Legend text="Minimum" />

        <Table columns={columns} rows={[]} />
      </div>
    </Box>
  );
}
