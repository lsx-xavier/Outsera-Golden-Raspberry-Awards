import { cva } from "class-variance-authority";

export const textInputWrapperStyles = cva(
  [
    "flex",
    "flex-row",
    "border-gray-900",
    "border-[1px]",
    "rounded-sm",
    "py-1",
    "px-2",
    "justify-center",
    "items-center",
    "gap-1",
    "[&_svg]:text-xl",
    "[&_svg]:!text-slate-800",
    "bg-slate-400/30",
  ],
  {
    variants: {
      error: {
        true: ["border-red-500"],
      },
    },
  },
);

export const textInputStyles = cva([
  "z-[1]",
  "w-full",
  "h-full",
  "outline-none",
  "py-2",
  "text-sm",
  "text-gray-600",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
  "bg-transparent",
]);
