import { Box } from "@/shared/components/Box";
import { Selection } from "@/shared/components/Selection";
import { Table } from "@/shared/components/Table";
import { ColumnsProps } from "@/shared/components/Table/types/Columns";
import { TextInput } from "@/shared/components/TextInput";
import { Subtitle } from "@/shared/components/Titles";
import React from "react";
import { MdOutlineDateRange } from "react-icons/md";

export default function ListMovies() {
  const [yearToFilter, setYearToFilter] = React.useState<string>("");
  const [winnerOrNot, setWinnerOrNot] = React.useState<string>("");

  const columns = [
    { id: "1", value: "Id" },
    {
      id: "2",
      value: (
        <div className="flex flex-col gap-1">
          Year
          <TextInput
            id="year"
            placeholder="Filter by Year"
            value={yearToFilter}
            onChange={setYearToFilter}
            icon={<MdOutlineDateRange />}
            iconSide="left"
          />
        </div>
      ),
    },
    { id: "3", value: "Title" },
    {
      id: "4",
      value: (
        <div className="flex flex-col gap-1">
          Winner?
          <Selection
            trigger={{ text: "Yes/No" }}
            options={{
              options: [
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
              ],
            }}
            value={winnerOrNot}
            onValueChange={(selectedOption) => setWinnerOrNot(selectedOption)}
          />
        </div>
      ),
    },
  ] as ColumnsProps;

  return (
    <Box>
      <Subtitle text="List Movies By Year" />

      <Table columns={columns} rows={[]} />
    </Box>
  );
}
