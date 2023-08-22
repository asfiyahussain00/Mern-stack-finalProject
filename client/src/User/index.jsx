import React, { useContext } from 'react'
import UserNav from './Components/NavUser'
import Brands from './pages/Brand'
import Category from './pages/Category'
import Home from './pages/Home'
import Products from './pages/product'
import ProductsByBrand from './pages/productsByBrand'
import ProductsByCategory from './pages/productByCategory'
import ProductPage from './pages/ProductPage'
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from './pages/Profile'




export default function User() {

    return (

        <>
            <UserNav />
            <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/brands" element={<Brands />} />
               
                 <Route path="/brands/:BrandName" element={<ProductsByBrand />} />
                 <Route path="/products" element={<Products />} />
                 <Route path="/products/:_id" element={<ProductPage />} />
                <Route path="/category" element={<Category />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/category/:CategoryName" element={<ProductsByCategory />} />
                <Route path="*" element={<Navigate to='/' replace={true} />} />
             </Routes>

        </>
    )
}