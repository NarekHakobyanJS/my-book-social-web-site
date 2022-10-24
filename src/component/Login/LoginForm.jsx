import React from "react";
import { Formik, Form, Field } from 'formik' ; 
import s from "./form.module.css";
const LoginForm = () => {
  
      return (
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className={s.form}>
          <Field name="name" type="text" />
          <Field name="email" type="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      );
}

export default LoginForm;