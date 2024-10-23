import { Meta, StoryFn } from "@storybook/react";
import { Table } from "./Table";
import { MOCK_COLUMNS } from "./__mocks__/Column";
import { MOCK_ROWS } from "./__mocks__/Rows";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {},
  args: {
    columns: MOCK_COLUMNS,
    rows: MOCK_ROWS,
  },
} as Meta<typeof Table>;

const DefaultComponent: StoryFn<typeof Table> = (args) => <Table {...args} />;
export const Default = DefaultComponent.bind({});
Default.args = {};
export const IsLoading = DefaultComponent.bind({});
IsLoading.args = {
  isLoading: true,
};
