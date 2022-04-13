// 派发表单实例给其他组件
import {useContext} from 'react';
import type {ReactNode} from 'react';
import {FormContext} from '../../helpers'

export function useFormContext(children:ReactNode) {
    const Context = useContext(FormContext);

    return [
        <FormContext.Provider value={Context}>{children}</FormContext.Provider>,
        Context
    ]
};