import { cva } from "class-variance-authority";

export const buttonStyle = cva([
  "p-2",
  "rounded-sm",
  "flex",
  "flex-row",
  "gap-1",
  "border",
  "border-gray-900",
  "transition-all",
  "ease-in-out",
  "duration-300",
  "hover:opacity-50",
]);
