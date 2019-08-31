import React from 'react';
import ReactDom from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import TopMenu from './components/TopMenu';
import Products from'./components/pages/Products';

import { CartProvider } from './contexts/Cart';

const Index = () => <h1>Home</h1>;

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
          
          <Route path="/" exact component={Index} />
          <Route path="/products/" exact component={Products} />
        </div>
      </Router>
    </CartProvider>
  );
}



export default App;