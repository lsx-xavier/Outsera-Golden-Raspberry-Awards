import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { FormHandles, RootProps } from "./types/Root";

export function Root<ValuesType extends FieldValues>({
  validation,
  defaultValues,
  onSubmit: onSubmitProp,
  children,
  className,
  ...props
}: RootProps<ValuesType>) {
  const form = useForm<z.infer<typeof validation>>({
    defaultValues,
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(validation),
  });

  const onSubmit = useCallback(
    (values: ValuesType) => onSubmitProp(values, form.reset, form.getValues()),
    [onSubmitProp, form],
  );

  return (
    <FormProvider {...form}>
      <form
        className={`w-full ${className}`}
        {...props}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {typeof children === "function"
          ? children(form as FormHandles)
          : children}
      </form>
    </FormProvider>
  );
}
