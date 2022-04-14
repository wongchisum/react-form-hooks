// 处理自定义表单项适配的逻辑
import { FormContext } from "../../helpers";
import { useContext, useState, SyntheticEvent } from "react";
import type { AdaptType } from "./types";

export function useAdapt(props: AdaptType) {
  const { name } = props;
  const formState = useContext(FormContext);
  const [value, setValue] = useState(() => formState?.getFieldValue(name));

  // 处理表单项的数据变动
  const handleFieldChange = <T extends any>(event: SyntheticEvent<T>) => {
    const { value } = event.target as HTMLInputElement;
    formState?.setFieldValue(name, value);
    setValue(value);
  };

  return {
    value,
    onChange: handleFieldChange,
  };
}
