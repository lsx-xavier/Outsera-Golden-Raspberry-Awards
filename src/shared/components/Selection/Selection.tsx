import * as Select from "@radix-ui/react-select";
import React, { useCallback } from "react";
import { MdOutlineArrowDownward, MdOutlineArrowUpward } from "react-icons/md";
import { OptionsView } from "./OptionsView";
import { Trigger } from "./Trigger";
import { SelectionProps } from "./types/Selection";

export function Selection({ trigger, options, ...props }: SelectionProps) {
  const handleReset = useCallback(() => props.onValueChange?.(""), [props]);

  return (
    <Select.Root {...props}>
      <Trigger {...trigger} />

      <Select.Portal>
        <Select.Content
          hideWhenDetached={false}
          avoidCollisions
          position="popper"
          side="bottom"
          data-testid="selection-content"
        >
          <Select.ScrollUpButton>
            <MdOutlineArrowUpward />
          </Select.ScrollUpButton>

          <OptionsView options={options} handleReset={handleReset} />

          <Select.ScrollDownButton>
            <MdOutlineArrowDownward />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
