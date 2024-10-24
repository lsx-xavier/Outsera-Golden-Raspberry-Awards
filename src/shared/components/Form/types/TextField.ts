import { TextInputProps } from "../../TextInput/types/TextInput";
import { RegisterProps } from "./Register";

export type TextFieldProps = Omit<RegisterProps, "render"> &
  Omit<TextInputProps, "value" | "errorId" | "onChange">;
