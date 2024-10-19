import { cva } from "class-variance-authority";

export const rowsTrStyles = cva([
  "border-b-[1px]",
  "last-of-type:border-b-0",
  "border-gray-900",
  "even:bg-slate-50",
]);

export const rowsTdStyles = cva([
  "border-r-[1px]",
  "last-of-type:border-r-0",
  "border-gray-900",
  "text-left",
  "px-2",
  "py-1",
]);
