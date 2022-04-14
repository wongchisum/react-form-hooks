export type { FormProps, FieldProps } from "./components";
export type { FormState } from "./helpers";
export { useFormState, useFormContext, useFormAdapt } from "./hooks";
export { Form, Field, Adaptor } from "./components";

type FormEventType<T> = {
  target: {
    value: T;
  };
};

export type EventHandler<T extends any> = (event: FormEventType<T>) => void;
