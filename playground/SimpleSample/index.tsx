import { useFormState, Form, Field, Adapt } from "../../dist/module";

type FormSchema = {
  name: string;
  age: number;
};

export default function SimpleSample() {
  const formState = useFormState<FormSchema>({ name: "wong", age: 26 });
  window._formState = formState; // 测试用
  return (
    <div>
      <div>Simple Sample</div>
      <Form formState={formState}>
        <Field name="name">
          <input type="text" />
        </Field>
      </Form>
    </div>
  );
}
