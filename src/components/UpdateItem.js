import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  price: Yup.number().required('Required').positive('Price must be positive')
});

function UpdateItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    axios.get(`http://localhost:5000/pizzas/${id}`)
      .then(response => {
        setPizza(response.data);
      })
      .catch(error => console.error('Error fetching item:', error));
  }, [id]);

  const handleSubmit = (values) => {
    axios.put(`http://localhost:5000/pizzas/${id}`, values)
      .then(() => {
        navigate('/items');
      })
      .catch(error => console.error('Error updating item:', error));
  };

  return (
    <div className="container">
      <h1>Update Pizza</h1>
      <Formik
        initialValues={pizza}
        validationSchema={validationSchema}
        enableReinitialize
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
          <button type="submit" className="btn btn-primary">Update Pizza</button>
        </Form>
      </Formik>
    </div>
  );
}

export default UpdateItem;
