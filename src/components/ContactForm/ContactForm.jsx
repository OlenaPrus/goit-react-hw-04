
import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import * as Yup from 'yup';


export default function ContactForm({ addContact }) {
    
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  function handleSubmit(values, actions) {
    const { name, number } = values;
    const id = nanoid();
    const newContact = { name, number, id };
    console.log(newContact);
    addContact(newContact);
    actions.resetForm();
  }

  return (
    <Formik initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form>
        <div className={css.form}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            id={nameFieldId}
          ></Field>

          <div className={css.errMsg}>
            <ErrorMessage name="name" as="span" />
          </div>

          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.formInput}
            type="tel"
            name="number"
            id={numberFieldId}
          ></Field>

          <div className={css.errMsg}>
            <ErrorMessage className={css.red} name="number" as="span" />
          </div>

          <button type="submit">Add Contact</button>
        </div>
      </Form>
    </Formik>
  );
}

