import { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState } from "react";
import { MdOutlineMoveDown } from "react-icons/md";
import { Selection } from "./Selection";
import { MOCK_OPTIONS } from "./__mock__/Option";

export default {
  title: "Components/Selection",
  component: Selection,
  argTypes: {
    onValueChange: {
      table: {
        disable: true,
      },
    },
    options: {
      control: "object",
    },
  },
  args: {
    options: [
      {
        options: MOCK_OPTIONS,
      },
    ],
    onValueChange: fn(),
  },
} as Meta<typeof Selection>;

const DefaultComponent: StoryFn<typeof Selection> = ({
  onValueChange,
  ...args
}) => {
  const [value, setValue] = useState("");
  return (
    <Selection
      {...args}
      value={value}
      onValueChange={(newValue) => {
        onValueChange?.(newValue);
        setValue(newValue);
      }}
    />
  );
};
export const Default = DefaultComponent.bind({});
Default.args = {
  trigger: {
    text: "Selecione uma opção",
  },
};

export const WithTriggerIcon = DefaultComponent.bind({});
WithTriggerIcon.args = {
  trigger: {
    text: "Selecione uma opção",
    icon: <MdOutlineMoveDown />,
  },
};
