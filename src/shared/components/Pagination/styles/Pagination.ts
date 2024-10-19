import { cva } from "class-variance-authority";

export const paginationStyles = cva([
  "flex",
  "flex-row",
  "gap-2",
  "items-center",
  "justify-center",
  "mt-3",
]);

export const pageButtonNumberStyle = cva([], {
  variants: {
    current: {
      true: ["bg-lime-950", "text-white"],
      false: ["hover:bg-slate-300"],
    },
  },
});

export const pageButtonDirectionsStyle = cva(["py-3"], {
  variants: {
    disabled: {
      true: [" cursor-not-allowed", "!opacity-40"],
      false: ["hover:bg-slate-300"],
    },
  },
});
