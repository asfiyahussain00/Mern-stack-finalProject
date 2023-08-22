import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/Context';
import Cookies from 'js-cookie';

export default function UserNav() {
    const { state, dispatch } = useContext(GlobalContext);

    return (
        <Navbar expand="lg" className="bg-dark text-white"> {/* Set background and text color */}
            <Container>
                <Link className='navbar-brand text-white' to='/'>E-Mart</Link> {/* Set text color */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to='/brands' className='nav-link text-white'>Brands</Link> {/* Set text color */}
                        <Link to='/products' className='nav-link text-white'>Products</Link> {/* Set text color */}
                        <Link to='/category' className='nav-link text-white'>Category</Link> {/* Set text color */}
                    </Nav>

                    <div className="d-flex gap-3">
                        <Link to='/profile' className="btn btn-outline-light d-flex align-items-center gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" style={{ height: '3vh', objectFit: 'contain' }} alt="" />
                            Profile
                        </Link>
                        <Link to='/carts' className='nav-link text-white'>
                            <img src="https://cdn-icons-png.flaticon.com/512/102/102276.png" style={{ height: '2.5vh', objectFit: 'contain', filter: 'invert(100%)' }} alt="Shopping Cart" />
                        </Link>
                        <button
                            className="btn btn-light"
                            onClick={() => {
                                Cookies.remove('token');
                                dispatch({ type: "USER_LOGOUT" });
                            }}
                        >
                            Sign Out
                        </button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
