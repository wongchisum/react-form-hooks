import type { FieldProps } from "./types";
import { FormContext } from "../../helpers";
import {
  useContext,
  useState,
  useMemo,
  Children,
  cloneElement,
  SyntheticEvent,
} from "react";

export function useField(props: FieldProps) {
  const { name, children } = props;
  const formState = useContext(FormContext);
  const [value, setValue] = useState(() => formState?.getFieldValue(name));

  // 处理表单项的数据变动
  const handleFieldChange = <T extends any>(event: SyntheticEvent<T>) => {
    const { value } = event.target as HTMLInputElement;
    formState?.setFieldValue(name, value);
    setValue(value);
  };

  // 覆盖表层的onChange和value
  const view = useMemo(() => {
    return Children.map(children, (child) => {
      if (child) {
        return cloneElement(child, {
          ...child.props,
          value,
          onChange: handleFieldChange,
        });
      }
      return null;
    });
  }, [props, value]);

  return {
    view,
  };
}
