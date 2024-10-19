import { HtmlHTMLAttributes } from "react";

export type TextInputProps = Omit<
  HtmlHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  errorMessage?: string;
  icon?: React.ReactNode;
  iconSide?: "left" | "right";
};
