import { TextInput } from "../TextInput";
import { Register } from "./Register";
import { TextFieldProps } from "./types/TextField";

export function TextField({ name, ...props }: TextFieldProps) {
  return (
    <Register
      name={name}
      render={({ error, value, onChange }) => (
        <TextInput
          value={value}
          onChange={onChange}
          errorMessage={error}
          {...props}
          name={name}
        />
      )}
    />
  );
}
