import { Meta, StoryFn } from "@storybook/react";
import { MdOutlineInfo } from "react-icons/md";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
} as Meta<typeof Button>;

const DefaultComponent: StoryFn<typeof Button> = (args) => <Button {...args} />;
export const Default = DefaultComponent.bind({});
Default.args = {
  children: "Botão",
};
export const CanPassIcon = DefaultComponent.bind({});
CanPassIcon.args = {
  children: <MdOutlineInfo />,
};
