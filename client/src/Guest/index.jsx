import React from 'react'
import Home from './Pages/Home';
import Login from './Pages/Login';
import { Navigate,Route,Routes,} from "react-router-dom";
import GuestNav from './Components/GuestNav'
import Signup from './Components/CustomForm/Signup';
import Brand from './Components/Brands';
import Category from './Components/Category';



export default function Guest() {
  return (
      <>
        <GuestNav/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/category" element={<Category />} />
              <Route path="/brand" element={<Brand />} />
              <Route path="*" element={<Navigate to='/login' replace={true} />} />
          </Routes>
      </>
  )
}