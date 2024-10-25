import { cva } from "class-variance-authority";

export const sidebarStyles = cva([
  "lg:bg-slate-200",
  "lg:min-h-full",
  "lg:px-5",
  "lg:py-3",
  "flex",
  "lg:flex-col",
  "lg:gap-2",
  "md:gap-4",
]);

export const sidebarLinkStyles = cva(["text-base", "font-medium"], {
  variants: {
    active: {
      true: [
        "underline",
        "font-semibold",
        "md:text-gray-400",
        "md:decoration-gray-400",
        "md:hover:decoration-gray-400",
        "lg:text-cyan-950",
        "lg:decoration-cyan-950",
        "lg:hover:decoration-cyan-950",
      ],
      false: [
        "hover:underline",
        "md:text-gray-200",
        "hover:decoration-black",
        "lg:text-slate-800",
        "lg:hover:decoration-slate-900",
      ],
    },
  },
});
