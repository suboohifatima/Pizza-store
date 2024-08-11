import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import DisplayAllItems from './components/DisplayAllItems';
import AddNewItem from './components/AddNewItem';
import UpdateItem from './components/UpdateItem';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Pizza Store</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/items">Pizzas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-item">Add New Pizza</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<DisplayAllItems />} />
          <Route path="/add-item" element={<AddNewItem />} />
          <Route path="/update-item/:id" element={<UpdateItem />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
