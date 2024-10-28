import { InputHTMLAttributes } from "react";

export type TextInputDto = string | number | undefined;

export type TextInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  value: TextInputDto;
  onChange: (value: TextInputDto) => void;
  placeholder?: string;
  errorMessage?: string;
  icon?: React.ReactNode;
  iconSide?: "left" | "right";
  mask?: (unmasked: string) => TextInputDto;
};
