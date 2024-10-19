import { cva } from "class-variance-authority";

export const tableStyles = cva([
  "w-full",
  "group",
  "table-auto",
  "relative",
  "outline",
  "outline-[1px]",
  "before:outline-gray-900",
  "rounded-sm",
  "overflow-hidden",
]);
