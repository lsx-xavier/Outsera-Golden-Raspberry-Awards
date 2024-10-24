import { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";
import { z } from "zod";
import { Form } from "./Form";
import { Button } from "../Button";

export default {
  title: "Components/Form",
  component: Form.Root,
  argTypes: {},
  args: {
    onSubmit: fn(),
    validation: z.object({
      textField: z.string().min(5),
    }),
  },
} as Meta<typeof Form.Root>;

const DefaultComponent: StoryFn<typeof Form.Root> = (args) => (
  <Form.Root {...args}>
    <Form.TextField name="textField" placeholder="Text Field" />

    <div className="mt-4">
      <Button type="submit">Submit</Button>
    </div>
  </Form.Root>
);
export const Default = DefaultComponent.bind({});
Default.args = {};
