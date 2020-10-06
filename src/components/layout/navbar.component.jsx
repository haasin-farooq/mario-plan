import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

import SignedInLinks from './signed-in-links.component';
import SignedOutLinks from './signed-out-links.component';
 
const NavBar = (props) => {
    const { auth } = props;
    // console.log(auth);
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                { links }
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavBar);