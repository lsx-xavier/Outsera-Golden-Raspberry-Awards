import * as Select from "@radix-ui/react-select";
import React from "react";
import { MdOutlineArrowDownward, MdOutlineArrowUpward } from "react-icons/md";
import { OptionsView } from "./OptionsView";
import { Trigger } from "./Trigger";
import { SelectionProps } from "./types/Selection";

export function Selection({ trigger, options, ...props }: SelectionProps) {
  return (
    <Select.Root {...props}>
      <Trigger {...trigger} />

      <Select.Portal>
        <Select.Content
          hideWhenDetached={false}
          avoidCollisions
          position="popper"
          side="bottom"
        >
          <Select.ScrollUpButton>
            <MdOutlineArrowUpward />
          </Select.ScrollUpButton>

          <OptionsView {...options} />

          <Select.ScrollDownButton>
            <MdOutlineArrowDownward />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
