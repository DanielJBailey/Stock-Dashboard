import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
    

    return (
        <div className="nav-bar">
            <div class="logo">
            <h1>Wad</h1>
            <p>finding a place to store it.</p>
            </div>
            
            <ul>
                <li>Log In</li>
                <li>Register</li>
            </ul>
        </div>
    );

};



export default NavBar;