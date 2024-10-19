import { cva } from "class-variance-authority";

export const triggerStyles = cva([
  "flex",
  "flex-row",
  "items-center",
  "justify-between",
  "gap-1",
  "border-gray-900",
  "border-[1px]",
  "rounded-sm",
  "py-2",
  "px-2",
  "bg-slate-400/30",
  "hover:bg-slate-400/60",
  "transition-all",
  "ease-in-out",
  "duration-300",

  "[&_span:nth-child(1)]:text-sm",
  "[&_span:nth-child(1)]:font-semibold",
  "[&_span:nth-child(2)]:text-sm",
  "[&_span:nth-child(2)]:font-semibold",
]);
