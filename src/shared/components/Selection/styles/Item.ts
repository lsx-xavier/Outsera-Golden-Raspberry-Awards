import { cva } from "class-variance-authority";

export const itemStyles = cva([
  "px-3",
  "hover:bg-slate-400/60",
  "cursor-pointer",
  "flex",
  "flex-row",
  "items-center",
  "gap-2",
]);
