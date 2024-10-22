import { customRender } from "@/test/utils";
import { fireEvent } from "@testing-library/react";
import { Selection } from "./Selection";
import { OptionItemBySectionProps } from "./types/OptionItem";

const MOCK_OPTIONS: OptionItemBySectionProps[] = [
  {
    options: [
      {
        text: "Option 1",
        value: "option-1",
      },
      {
        text: "Option 2",
        value: "option-2",
      },
    ],
  },
];

const setup = () => {
  const utils = customRender(
    <Selection
      trigger={{
        text: "Trigger",
      }}
      options={MOCK_OPTIONS}
    />,
  );

  return {
    utils,
  };
};

describe("Selection", () => {
  it("should render correctly the trigger with text without options", () => {
    const { utils } = setup();

    expect(utils.getByText("Trigger")).toBeInTheDocument();
    expect(utils.queryByText("Option 1")).not.toBeInTheDocument();
    expect(utils.queryByText("Option 2")).not.toBeInTheDocument();
  });

  it("should render correctly the options when click on the trigger", () => {
    const { utils } = setup();

    const trigger = utils.getByText("Trigger");

    expect(trigger).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(utils.getByText("Option 1")).toBeInTheDocument();
    const option2 = utils.getByText("Option 2");
    expect(option2).toBeInTheDocument();

    fireEvent.click(option2);
    expect(utils.queryByText("Trigger")).not.toBeInTheDocument();
  });
});
