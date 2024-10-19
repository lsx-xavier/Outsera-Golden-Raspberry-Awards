import { Box } from "@/shared/components/Box";
import { Button } from "@/shared/components/Button";
import { Table } from "@/shared/components/Table";
import { TextInput } from "@/shared/components/TextInput";
import { Subtitle } from "@/shared/components/Titles";
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

export function ListMovieByYear() {
  const [searchYear, setSearchYear] = useState("");
  const columns = [
    { id: "1", value: "Id" },
    { id: "2", value: "Year" },
    { id: "3", value: "Title" },
  ];

  return (
    <Box>
      <Subtitle text="List Movies By Year" />

      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center">
          <TextInput
            className="flex-1"
            placeholder="Search by year"
            value={searchYear}
            onChange={setSearchYear}
          />

          <Button className="py-3 px-3 bg-blue-600 text-white hover:bg-blue-700">
            <MdOutlineSearch />
          </Button>
        </div>
        <Table columns={columns} rows={[]} />
      </div>
    </Box>
  );
}
