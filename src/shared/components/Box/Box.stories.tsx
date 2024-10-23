import { Meta, StoryFn } from "@storybook/react";
import { Box } from "./Box";

export default {
  title: "Components/Box",
  component: Box,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
} as Meta<typeof Box>;

const DefaultComponent: StoryFn<typeof Box> = (args) => <Box {...args} />;
export const Default = DefaultComponent.bind({});
Default.args = {
  children: <div className="w-56 h-56">Component box</div>,
};
