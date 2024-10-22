import * as Select from "@radix-ui/react-select";
import { MdOutlineCheck } from "react-icons/md";
import { randomId } from "@/shared/utils/randomId";
import { OptionItemBySectionProps, OptionItemDto } from "./types/OptionItem";
import { itemStyles } from "./styles/Item";

const ContentChild = ({ text, value }: OptionItemDto) => (
  <Select.Item className={itemStyles()} value={value}>
    <Select.ItemText>{text}</Select.ItemText>

    <Select.ItemIndicator>
      <MdOutlineCheck className="!text-lime-950" />
    </Select.ItemIndicator>
  </Select.Item>
);

export default function Item({
  textSection,
  options,
}: OptionItemBySectionProps) {
  if (textSection) {
    return (
      <Select.Group id="group">
        <Select.Separator
          id="separator"
          className="h-[1px] w-full bg-slate-300 my-2"
        />

        <Select.Label className="px-1 mb-3 text-xs text-gray-600">
          {textSection}
        </Select.Label>
        <div className="flex flex-col gap-2">
          {options.map((option) => (
            <ContentChild key={randomId()} {...option} />
          ))}
        </div>
      </Select.Group>
    );
  }

  return options.map((option) => <ContentChild key={randomId()} {...option} />);
}
