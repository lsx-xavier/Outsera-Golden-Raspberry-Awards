import { customRender } from "@/test/utils";
import { z } from "zod";
import { fireEvent, waitFor } from "@testing-library/react";
import { Form } from "./Form";
import { Button } from "../Button";

const handleSubmit = vi.fn();
const schemaValidation = z.object({
  textField: z.string().min(5),
});

const setup = () => {
  const utils = customRender(
    <Form.Root
      validation={schemaValidation}
      onSubmit={(value) => {
        handleSubmit(value);
      }}
    >
      <Form.TextField name="textField" placeholder="Text Field" />

      <Button type="submit">Submit</Button>
    </Form.Root>,
  );

  const submitButton = utils.getByText("Submit");
  return { utils, submitButton };
};

describe("Form", () => {
  it("should render correctly", async () => {
    const { utils, submitButton } = setup();

    const inputText = utils.getByPlaceholderText("Text Field");

    expect(inputText).toBeInTheDocument();

    fireEvent.change(inputText, { target: { value: "test" } });

    expect(inputText).toHaveValue("test");

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        utils.getByText("String must contain at least 5 character(s)"),
      ).toBeInTheDocument();
    });

    fireEvent.change(inputText, { target: { value: "test 12" } });

    expect(inputText).toHaveValue("test 12");

    await waitFor(() => {
      expect(
        utils.queryByText("String must contain at least 5 character(s)"),
      ).not.toBeInTheDocument();

      fireEvent.click(submitButton);

      expect(handleSubmit).toHaveBeenCalled();
      expect(handleSubmit).toHaveBeenCalledWith({
        textField: "test 12",
      });
    });
  });

  it("should render correctly the error message and call onSubmit when the input is valid", async () => {
    const { utils, submitButton } = setup();

    const inputText = utils.getByPlaceholderText("Text Field");

    expect(inputText).toBeInTheDocument();

    fireEvent.change(inputText, { target: { value: "test" } });

    expect(inputText).toHaveValue("test");

    await waitFor(() => {
      expect(
        utils.getByText("String must contain at least 5 character(s)"),
      ).toBeInTheDocument();
    });

    fireEvent.change(inputText, { target: { value: "test 12" } });

    expect(inputText).toHaveValue("test 12");

    await waitFor(() => {
      expect(
        utils.queryByText("String must contain at least 5 character(s)"),
      ).not.toBeInTheDocument();

      fireEvent.click(submitButton);

      expect(handleSubmit).toHaveBeenCalled();
      expect(handleSubmit).toHaveBeenCalledWith({
        textField: "test 12",
      });
    });
  });
});
