import { DeepPartial, FieldValues, UseFormReturn } from "react-hook-form";
import { ZodType } from "zod";

export type FormReset<ValuesType = any> = (valuesToReset?: ValuesType) => void;

export type FormHandles = Omit<
  UseFormReturn<FieldValues, object>,
  "handleSubmit"
>;

export type RootProps<ValuesType> = {
  validation: ZodType;
  defaultValues?: DeepPartial<ValuesType>;
  onSubmit: (
    values: ValuesType,
    reset: FormReset<ValuesType>,
    getValues: ValuesType,
  ) => Promise<void> | void;
  children?: ((form: FormHandles) => React.ReactNode) | React.ReactNode;
  className?: string | string[];
};
