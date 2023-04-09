import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <Link to="/">Home</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;