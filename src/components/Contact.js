import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().required('Required')
});

function Contact() {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <Field name="message" as="textarea" className="form-control" />
            <ErrorMessage name="message" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Contact;
