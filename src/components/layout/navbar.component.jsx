import React from 'react';
import { Link } from 'react-router-dom';

import SignedInLinks from './signed-in-links.component';
import SignedOutLinks from './signed-out-links.component';
 
const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    );
};

export default NavBar;