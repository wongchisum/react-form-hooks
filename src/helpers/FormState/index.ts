type FormDataType = Record<string, any> | any[] | undefined | null;

export class FormState<T extends FormDataType> {
  initData: FormDataType = undefined;
  currentData: FormDataType = undefined;
  constructor(data: T) {
    this.initData = data;
    this.currentData = data;
  }
  // 获取表单数据
  getFormData() {
    return this.currentData as T;
  }
  // 设置表单某个字段的值
  setFieldValue(key: string, value: any) {
    if (key && this.currentData) {
      (this.currentData as any)[key] = value;
    }
  }
  // 获取表单某个字段的值
  getFieldValue(key: string) {
    if (key && this.currentData) {
      return (this.currentData as any)[key];
    }
  }

  // 重设表单数据
  resetFormData() {
    this.currentData = this.initData;
  }
}
