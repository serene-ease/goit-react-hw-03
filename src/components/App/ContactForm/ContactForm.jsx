import { Formik, Form, Field } from 'formik';
// import { string, number} from 'yup'
import * as Yup from 'yup'; // ^ Shuold be enough
import { nanoid } from 'nanoid';

import style from '.ContactForm';

export const ContactForm = onAdd => {
  const formFields = [
    { name: 'name', type: text, id: nanoid() },
    { name: 'phone', type: tel, id: nanoid() },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name would be 3 symbols or longer')
      .max(50, 'Too much sympols, please input name between 3 and 50 sybols!')
      .required('This area is required! type name here please'),
    number: Yup.number()
      .min(9, 'Not enough symbols to be a phone number!')
      .max(9, 'Too long!')
      .required('Adding contact without number senseles here.'),
  });

  <Formik
    initialValues={{
      contactname: '',
      number: '',
    }}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      onAdd({ id: nanoid(3), ...values });
      actions.resetForm();
    }}
  />;
  return (
    <Form>
      <ul>
        {formFields.map(curField => {
          return (
            <Li>
              <label htmlFor={curField.id}>Username:</label>
              <Field type={curField.type} name={curField.name} id={curField.id} />
              <ErrorMessage className={style.error} name={curField.name} component="span" />
            </Li>
          );
        })}
      </ul>
    </Form>
  );
};
