import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { textInputStyles, textInputWrapperStyles } from "./styles/TextInput";
import { TextInputProps } from "./types/TextInput";

export function TextInput({
  value = "",
  onChange,
  placeholder,
  errorMessage,
  icon,
  iconSide = "left",
  mask,
  className,
  ...props
}: TextInputProps) {
  const [inputField, setInputField] = useState<string | number | "">(value);
  const lastInputField = useRef<string | number | "">("");

  useEffect(() => {
    if (lastInputField.current !== inputField) {
      lastInputField.current = inputField;
      onChange(inputField);
    }
  }, [inputField, onChange]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const originalValue = event.target.value;

      if (mask) {
        setInputField(mask(originalValue as string));
      } else {
        setInputField(originalValue);
      }
    },
    [mask],
  );

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div
        className={textInputWrapperStyles({
          error: !!errorMessage,
        })}
      >
        {icon && iconSide === "left" && icon}

        <input
          value={inputField}
          onChange={handleChange}
          // onChange={(e) => onChange(e.target.value)}
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
