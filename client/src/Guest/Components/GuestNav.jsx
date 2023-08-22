import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaUserPlus, FaTags } from 'react-icons/fa'; 

export default function GuestNav() {
    const navbarStyle = {
        backgroundColor: '#000',
        color: '#fff',
    };

    const brandStyle = {
        color: '#fff',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    };

    const linkStyle = {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    };

    const linkHoverStyle = {
        color: '#ccc',
    };

    const iconStyle = {
        marginRight: '5px',
    };

    return (
        <Navbar expand="lg" style={navbarStyle}>
            <Container>
                <Link className='navbar-brand' to='/' style={brandStyle}>E-Mart</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/login' className='nav-link' style={linkStyle}>
                            <FaUserCircle style={iconStyle} /> Login
                        </Link>
                        <Link to='/signup' className='nav-link' style={linkStyle}>
                            <FaUserPlus style={iconStyle} /> Sign Up
                        </Link>
                        <Link to='/brand' className='nav-link' style={linkStyle}>
                            <FaTags style={iconStyle} /> Brand
                        </Link>
                        <Link to='/Category' className='nav-link' style={linkStyle}>
                            <FaTags style={iconStyle} /> Category
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
