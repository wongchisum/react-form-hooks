import { useEffect, useState } from 'react';
import {FormState} from '../../helpers';

// 用于维护表单状态的hooks
export function useFormState<T>(initData:T) {
    const [formState,setFormState] = useState<any>(undefined);
    useEffect(() => {
        const instance = new FormState<T>(initData)
        setFormState(instance);
    },[])

    return formState;
}