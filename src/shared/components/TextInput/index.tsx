import { textInputStyles, textInputWrapperStyles } from "./styles/TextInput";
import { TextInputProps } from "./types/TextInput";

export function TextInput({
  value,
  onChange,
  placeholder,
  errorMessage,
  icon,
  iconSide,
  ...props
}: TextInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={textInputWrapperStyles({
          error: !!errorMessage,
        })}
      >
        {icon && iconSide === "left" && icon}

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={textInputStyles()}
          placeholder={placeholder}
          {...props}
        />

        {icon && iconSide === "right" && icon}
      </div>

      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
}
