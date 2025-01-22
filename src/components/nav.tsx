import React, { useState } from 'react';
import './nav.css';
import Logo from '../assets/ar-logo.svg'

const Nav: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    };

    return (
    <header className="header">
    <a href='/'>
        <img src={Logo} alt="Andrew's Logo" className="logo" />
    </a>
        <div className='unselectable'>  
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰  
            </button>
            <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                <li><a href="/">About</a></li>
                <li><a href="/outdoors">Outdoors</a></li>
                <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    );
};

export default Nav;