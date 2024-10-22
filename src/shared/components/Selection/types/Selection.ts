import { SelectProps } from "@radix-ui/react-select";
import { OptionsViewProps } from "./OptionsView";
import { TriggerProps } from "./Trigger";

export type SelectionProps = {
  trigger: TriggerProps;
  options: OptionsViewProps["options"];
} & SelectProps;
