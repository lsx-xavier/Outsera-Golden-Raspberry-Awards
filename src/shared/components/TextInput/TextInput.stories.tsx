import { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";
import { MdOutlineSearch } from "react-icons/md";
import { TextInput } from ".";

export default {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    value: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    onChange: fn(),
  },
} as Meta<typeof TextInput>;

const DefaultComponent: StoryFn<typeof TextInput> = (args) => (
  <TextInput {...args} />
);
export const Default = DefaultComponent.bind({});
Default.args = {
  placeholder: "Placeholder",
};
export const WithIcon = DefaultComponent.bind({});
WithIcon.args = {
  placeholder: "Placeholder",
  icon: <MdOutlineSearch />,
  iconSide: "left",
};
export const WithIconRight = DefaultComponent.bind({});
WithIconRight.args = {
  placeholder: "Placeholder",
  icon: <MdOutlineSearch />,
  iconSide: "right",
};
export const WithErrorMessage = DefaultComponent.bind({});
WithErrorMessage.args = {
  placeholder: "Placeholder",
  errorMessage: "Error message",
};
