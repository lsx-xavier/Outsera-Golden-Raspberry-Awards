import { InputHTMLAttributes } from "react";

export type TextInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  errorMessage?: string;
  icon?: React.ReactNode;
  iconSide?: "left" | "right";
};
