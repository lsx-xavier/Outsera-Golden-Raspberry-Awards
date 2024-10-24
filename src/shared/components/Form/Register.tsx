import { Controller } from "react-hook-form";
import { RegisterProps } from "./types/Register";

export function Register({ name, render }: RegisterProps) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState }) =>
        render({
          name,
          value: field.value,
          onChange: field.onChange,
          onBlur: field.onBlur,
          error: fieldState.error?.message,
          ref: field.ref,
        })
      }
    />
  );
}
