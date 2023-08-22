import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="home-page">
            <div className="banner">

                <img src='https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975924.jpg' alt="Banner" />
            </div>
            <div className="content">
                <h2>Welcome to E-Mart</h2>
                <h1> HAPPY SHOPPING !</h1>
                <p>Your one-stop shop for all your e-commerce needs. Explore a wide range of products and enjoy the convenience of online shopping.</p>
            </div>
        </div>
    );
}
