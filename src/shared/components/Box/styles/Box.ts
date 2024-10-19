import { cva } from "class-variance-authority";

export const boxStyles = cva([
  "border",
  "border-1",
  "border-gray-300",
  "rounded-md",
  "shadow-md",
  "shadow-gray-400/0.5",
  "p-3",
  "flex",
  "flex-col",
  "gap-2",
]);
