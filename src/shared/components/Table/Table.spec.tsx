import { customRender } from "@/test/utils";
import { Table } from "./Table";

const columns = [
  { id: "id", value: "Id" },
  { id: "year", value: "Year" },
];
const rows = [
  {
    id: "1",
    columnsValues: [
      { id: "id", value: "1" },
      { id: "year", value: "2020" },
    ],
  },
  {
    id: "3",
    columnsValues: [
      { id: "id", value: "2" },
      { id: "year", value: "2021" },
    ],
  },
];

const setup = (isLoading = false) => {
  const utils = customRender(
    <Table isLoading={isLoading} columns={columns} rows={rows} />,
  );

  return {
    utils,
  };
};

describe("Table", () => {
  it("should render correctly", () => {
    const { utils } = setup();

    expect(utils.getAllByText("Id")).toHaveLength(1);
    expect(utils.getAllByText("Year")).toHaveLength(1);
    expect(utils.getAllByText("1")).toHaveLength(1);
    expect(utils.getAllByText("2020")).toHaveLength(1);
    expect(utils.getAllByText("2")).toHaveLength(1);
    expect(utils.getAllByText("2021")).toHaveLength(1);
  });

  it("should render correctly when isLoading", () => {
    const { utils } = setup(true);

    expect(utils.getAllByText("Id")).toHaveLength(1);
    expect(utils.getAllByText("Year")).toHaveLength(1);
    expect(utils.getAllByTestId("tr")).toHaveLength(10);
  });
});
