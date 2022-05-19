import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css';
import { Button } from './Button';

function Navbar() {

    const [isClick, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const toggleClick = () => setClick(!isClick);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() =>{
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    TRVL <i className="fab fa-typo3" />
                </Link>
                <div className="menu-icon" onClick={ toggleClick }>
                    <i className={ isClick ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={ isClick ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/services' className='nav-link' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/products' className='nav-link' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sign-up' className='nav-link-mobile' onClick={closeMobileMenu}>
                            Sign-up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar