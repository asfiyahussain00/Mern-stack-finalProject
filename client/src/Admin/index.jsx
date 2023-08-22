import React from 'react';
import Sidebar from './Components/Sidebar';
import Home from './pages/Home';
import Category from './pages/Category';
import Products from './pages/Product';
import {  Route ,  Routes } from "react-router-dom";

export default function Admin() {
  return (
    <div className='container-fluid'>
      <div className='row '>
        <div className='col-md-3 bg-dark' style={{ height: '100vh' }}>
          <Sidebar />
        </div>
        <div className='col-md-8'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="*" element={<Home />} />
      </Routes>
        </div>
      </div>
    </div>
  );
}



