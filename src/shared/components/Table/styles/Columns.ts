import { cva } from "class-variance-authority";

export const columnsStyles = cva([
  "border-r-[1px]",
  "border-b-[1px]",
  "last-of-type:border-r-0",
  "border-gray-900",
  "text-left",
  "px-2",
  "py-1",
  "font-semibold",
]);
