import { useField } from "./logic";
import type { FieldProps } from "./types";

export function Field(props: FieldProps) {
  const { view } = useField(props);
  return view;
}

export type { FieldProps } from "./types";
