import type { FormProps } from "./types";
import { FormContext } from "../../helpers";

export function Form(props: FormProps) {
  const { state, children } = props;
  if (!state) return null;

  return <FormContext.Provider value={state}>{children}</FormContext.Provider>;
}

export type { FormProps } from "./types";
