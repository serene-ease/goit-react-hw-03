import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import { nanoid } from 'nanoid';

// import style from '.ContactForm.module.css';

export const ContactForm = ({ onAdd }) => {
  const formFields = [
    { name: 'contactname', type: 'text', id: useId(), decor: 'Username' },
    { name: 'number', type: 'tel', id: useId(), decor: 'Number' },
  ];

  const validationSchema = Yup.object().shape({
    contactname: Yup.string()
      .min(3, 'Name would be 3 symbols or longer')
      .max(50, 'Too much sympols, please input name between 3 and 50 sybols!')
      .required('This area is required! type name here please'),
    number: Yup.number()
      .min(9, 'Not enough symbols to be a phone number!')
      .required('Adding contact without number senseles here.'),
  });

  return (
    <Formik
      initialValues={{
        contactname: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        onAdd({ id: nanoid(5), ...values });
        actions.resetForm();
      }}
    >
      <Form>
        <ul>
          {formFields.map(curField => {
            return (
              <li key={curField.id}>
                <label htmlFor={curField.id}>{curField.decor}</label>
                <Field name={curField.name} type={curField.type} id={curField.id} />
                <ErrorMessage name={curField.name} component="span" />
              </li>
            );
          })}
        </ul>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
