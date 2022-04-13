export type FieldProps = {
    // 字段的名称
    name:string,
    // 是否必填(默认为false)
    required?:boolean
    // 字段的表单组件，手动触发变化时的回调函数
    onFieldChange?:(event:any) => void
}