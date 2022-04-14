import { createContext } from "react";
import type { FormState } from "../../helpers";
export const FormContext = createContext<FormState<any> | undefined>(undefined);
