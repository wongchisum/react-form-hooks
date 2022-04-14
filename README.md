# React-form-hook

## 概述

通过使用自定义的React hooks和表单组件，进行React表单库的状态管理。

目前处于开发阶段，请勿在任何项目下使用。

------

## 功能

​	数据绑定+状态管理

​	适配能力

​	校验能力

​	额外的表单操作

------

## 内容

## 	Hooks

### 	useFormState:

​		通过传入表单数据，进行表单状态的初始化，通过暴露的表单示例和相应方法，可以进行额外的表单操作。

### 	useFormAdapt:

​		传入视图组件，提供表单数据绑定，校验的能力。



## 	Components：

### 		Form:

​			接收formState或者initData，进行表单状态的初始化和表单状态的分发。

### 		Field:

​			用于渲染某个字段的数据，支持视图适配。
