import React,{useState} from 'react';
import {render} from 'react-dom';
import {useFormState} from '../index'

type FormDataType = {
    name:string,
    age:number
}
// 测试
const App = () => {
    const formState = useFormState<FormDataType>({name:"wong",age:25});

    console.log("formState",formState)
    return (
        <div>
            <div>Hello Form</div>
        </div>
    )
}

render(<App />,document.querySelector("#root"))