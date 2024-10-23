import { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";
import { Pagination } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    onPageChange: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    onPageChange: fn(),
  },
} as Meta<typeof Pagination>;

const DefaultComponent: StoryFn<typeof Pagination> = (args) => (
  <Pagination {...args} />
);
export const Default = DefaultComponent.bind({});
Default.args = {
  totalPages: 10,
  currentPage: 1,
};
