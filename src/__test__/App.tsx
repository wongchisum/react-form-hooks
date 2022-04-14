// import * as React from "react";
import { createRoot } from "react-dom/client";
import { useFormState, Form, Field, Adaptor } from "../index";
import type { FormState, EventHandler } from "../index";

type FormDataType = {
  name: string;
  age: number;
  intro: string;
};

type CustomFieldProps = {
  value: string;
  onChange: (event: { target: { value: string } }) => void;
};

// 自定义表单项
const CustomField = (props: CustomFieldProps) => {
  return (
    <>
      <div>这是自定义表单项</div>
      <input type="text" {...props} />
      <button>点击</button>
    </>
  );
};

// 适配
const AdaptCustomField = ({ name }: { name: string }) => (
  <Adaptor name={name}>
    {(value: any, onChange: EventHandler<any>) => (
      <CustomField value={value} onChange={onChange} />
    )}
  </Adaptor>
);

// 测试
const App = () => {
  const formState = useFormState<FormDataType>({
    name: "wong",
    age: 25,
    intro: "text",
  });

  console.log("formState", formState);
  return (
    <div>
      <div>Form Playground</div>

      <Form state={formState}>
        {/* <Field name="name">
          <input type="text" />
        </Field>
        <Field name="age">
          <input type="text" />
        </Field> */}
        <AdaptCustomField name="intro" />
        <div>
          <button>提交</button>
        </div>
      </Form>
    </div>
  );
};

// render(<App />, document.querySelector("#root"));
// React18挂载渲染
const root = createRoot(document.querySelector("#root")!);
root.render(<App />);
