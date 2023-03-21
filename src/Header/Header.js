import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='routerNav'>
            <Link to='/'>Home</Link>
            <Link to='/Order'>Order</Link>
            <Link to='/about'>About</Link>           
            <Link to='/grand'>Grand</Link>           
        </nav>
    );
};

export default Header;