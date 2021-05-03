import React from 'react';
import './Navbar.css';
import CoolButton from './coolbutton/CoolButton'
import 'bulma/css/bulma.css';


function Navbar () {
    return (
        <div class="nav-bar">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
            <a class="link-navbar" href="#">Home</a>
            <ul>
                <CoolButton buttonName="Signup" classes="button is-rounded my-class is-danger is-small" />
                <CoolButton buttonName="Login" classes="button is-small is-success" />
            </ul>
        </div>
    )
} 

export default Navbar;