import React from 'react';

import logo from "../Assets/images/logoreduzido.jpg";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <img src={logo} className="navbar-brand" alt="My Green Trip" />
            </div>
        </nav>
    );
}