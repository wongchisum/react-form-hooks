import { useAdapt } from "./logic";
import type { AdaptType } from "./types";

export function Adaptor(props: AdaptType) {
  const { children } = props;
  const { value, onChange } = useAdapt(props);

  if (typeof children === "function") {
    return children(value, onChange);
  }
  return null;
}

export type { AdaptType } from "./types";
