import React, { useEffect } from 'react';
import { FiHome } from 'react-icons/fi';
import { BiCategoryAlt } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const NavItems = [
    {
      tab: 'Home',
      url: '/',
      icon: <FiHome />,
    },
    {
      tab: 'Categories',
      url: '/category',
      icon: <BiCategoryAlt />,
    },

    {
      tab: 'Products',
      url: '/products',
      icon: <BiCategoryAlt />,
    },



  ];

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <>
      <div className='bg-primary p-3 text-white d-flex justify-content-between align-items-center'>
        <span className='fs-5 fw-bold'>Admin Name</span>
        <button className='btn btn-outline-light'>Logout</button>
      </div>
      <ul className='nav flex-column pt-3'>
        {NavItems.map((val, key) => (
          <li key={key} className={`nav-item  mt-2 rounded ${location.pathname == val.url?'bg-white':null}` }>
            <Link className='nav-link d-flex align-items-center gap-2' to={val.url}>
              {val.icon}
              {val.tab}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
