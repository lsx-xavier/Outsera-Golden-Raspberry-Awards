import * as Select from "@radix-ui/react-select";
import { MdOutlineArrowDownward } from "react-icons/md";
import { TriggerProps } from "./types/Trigger";
import { triggerStyles } from "./styles/Trigger";

export function Trigger({ text, icon }: TriggerProps) {
  return (
    <Select.Trigger className={triggerStyles()}>
      <Select.Value placeholder={text} />
      <Select.Icon>{icon || <MdOutlineArrowDownward />}</Select.Icon>
    </Select.Trigger>
  );
}
