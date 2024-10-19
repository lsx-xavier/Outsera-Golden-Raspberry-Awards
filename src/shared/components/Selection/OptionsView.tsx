import * as Select from "@radix-ui/react-select";
import Item from "./Item";
import { OptionsViewProps } from "./types/OptionsView";
import { itemStyles } from "./styles/Item";

export function OptionsView({ options }: OptionsViewProps) {
  return (
    <Select.Viewport className="p-3 bg-slate-400/60 border border-gray-900 shadow-md shadow-gray-700 [&_#group:first-of-type_#separator]:hidden flex flex-col gap-2">
      <Select.Item className={itemStyles()} value="unassigned">
        <Select.ItemText>Reset choice</Select.ItemText>
      </Select.Item>

      {options.map((option) => (
        <Item {...option} />
      ))}
    </Select.Viewport>
  );
}
