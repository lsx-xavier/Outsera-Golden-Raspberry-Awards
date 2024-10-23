import { Meta, StoryFn } from "@storybook/react";
import { Title, Subtitle, Legend } from "./Titles";
import { CommonProps } from "./types/Titles";

export default {
  title: "Components/Titles",
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
} as Meta<CommonProps>;

const TitleComponent: StoryFn<CommonProps> = (args) => <Title {...args} />;
export const TitleDefault = TitleComponent.bind({});
TitleDefault.args = {
  text: "Title",
};
const SubtitleComponent: StoryFn<CommonProps> = (args) => (
  <Subtitle {...args} />
);
export const SubtitleDefault = SubtitleComponent.bind({});
SubtitleDefault.args = {
  text: "Subtitle",
};
const LegendComponent: StoryFn<CommonProps> = (args) => <Legend {...args} />;
export const LegendDefault = LegendComponent.bind({});
LegendDefault.args = {
  text: "Legend",
};
