type FormDataType = Record<string,any>|any[]|undefined;

export class FormState <T extends FormDataType>{
    initData:FormDataType=undefined;
    currentData:FormDataType=undefined;
    constructor(data:T) {
        this.initData = data;
        this.currentData = data;
    };
    // 获取表单数据
    getFormData() {
        return this.currentData as T;
    };
    // 设置表单某个字段的值
    setFieldValue(key:string,value:any) {

    };
    // 获取表单某个字段的值
    getFieldValue(key:string) {

    };

    // 重设表单数据
    resetFormData() {

    }
}