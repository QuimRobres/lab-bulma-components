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
                <li></li>
                
                <CoolButton buttonName="Login" classes="button is-small is-success" />
            </ul>
        </div>
    )
} 

export default Navbar;