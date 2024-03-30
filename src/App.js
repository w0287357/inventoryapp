import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CategoriesPage from './CategoriesPage/CategoriesPage';
import ItemsPage from './ItemsPage/ItemsPage';

function App() {
  return (
    <Router>
        <nav className='app' style={{ margin: 10 }}>
          <Link to="/items" style={{padding: 5 }}>
          Manage Items Table
          </Link>
          <Link to="/categories" style={{padding: 5 }}>
          Manage Categories Table
          </Link>
        </nav>
      <Routes>
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
