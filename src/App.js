import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CategoriesPage from './CategoriesPage/CategoriesPage';
import ItemsPage from './ItemsPage/ItemsPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/items">Manage Items</Link>
          <Link to="/categories">Manage Categories</Link>
        </div>
        <div>
          <Route path="/items" component={ItemsPage} />
          <Route path="/categories" component={CategoriesPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
