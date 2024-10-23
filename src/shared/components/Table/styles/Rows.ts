import { cva } from "class-variance-authority";

export const rowsTrStyles = cva(
  [
    "border-b-[1px]",
    "last-of-type:border-b-0",
    "border-gray-900",
    "even:bg-slate-100",
  ],
  {
    variants: {
      isLoading: {
        true: [
          "h-3",
          "animate-pulse",
          "even:bg-slate-400/60",
          "odd:bg-slate-300/60",
        ],
      },
    },
  },
);

export const rowsTdStyles = cva(
  [
    "border-r-[1px]",
    "last-of-type:border-r-0",
    "border-gray-900",
    "text-left",
    "px-2",
    "py-1",
  ],
  {
    variants: {
      isLoading: {
        true: ["h-8"],
      },
    },
  },
);
