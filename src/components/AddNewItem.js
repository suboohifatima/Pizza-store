import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  price: Yup.number().required('Required').positive('Price must be positive')
});

function AddNewItem() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    axios.post('http://localhost:5000/pizzas', values)
      .then(() => {
        navigate()('/items');
      })
      .catch(error => console.error('Error adding item:', error));
  };

  return (
    <div className="container">
      <h1>Add New Pizza</h1>
      <Formik
        initialValues={{ name: '', description: '', price: '' }}
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
            <label htmlFor="description">Description</label>
            <Field name="description" type="text" className="form-control" />
            <ErrorMessage name="description" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <Field name="price" type="number" className="form-control" />
            <ErrorMessage name="price" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Add Pizza</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddNewItem;
