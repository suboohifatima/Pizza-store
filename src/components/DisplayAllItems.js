import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DisplayAllItems() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/pizzas')
      .then(response => {
        setPizzas(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/pizzas/${id}`)
      .then(() => {
        setPizzas(pizzas.filter(pizza => pizza.id !== id));
      })
      .catch(error => console.error('Error deleting item:', error));
  };

  return (
    <div className="container">
      <h1>Our Pizzas</h1>
      <ul className="list-group">
        {pizzas.map(pizza => (
          <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{pizza.name}</h5>
              <p>{pizza.description}</p>
              <p>${pizza.price}</p>
            </div>
            <div>
              <Link to={`/update-item/${pizza.id}`} className="btn btn-primary mr-2">Update</Link>
              <button className="btn btn-danger" onClick={() => handleDelete(pizza.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayAllItems;
