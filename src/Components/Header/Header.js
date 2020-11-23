import React from 'react';
import {HeaderCSS} from './Header.css'

const Header = () => {
    return (
        <div className={HeaderCSS}>
            <nav className='navbar-color'>
                <a href="./courses">Courses</a>
                <a href="./my-profile">Profile</a>
                <a href="./sign-up">Sign Up</a>
                <a href="./login">Login</a>
            </nav>
        </div>
    );
};

export default Header;