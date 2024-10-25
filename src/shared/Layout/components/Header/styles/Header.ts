import { cva } from "class-variance-authority";

export const sidebarLinkStyles = cva(
  ["text-slate-800", "hover:underline", "hover:decoration-slate-800"],
  {
    variants: {
      active: {
        true: [
          "text-cyan-950",
          "underline",
          "decoration-cyan-950",
          "hover:decoration-cyan-950",
          "font-medium",
        ],
      },
    },
  },
);
