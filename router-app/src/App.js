import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import {Home} from './components/Home'
import {Navbar} from './components/Navbar'
import {ProductsDetails} from './components/ProductsDetails';
import {Products} from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:productId" element={<ProductsDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
