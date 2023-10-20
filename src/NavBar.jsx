import React from 'react';
import logo from './FKN_title_TRANSP2.png';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div>
                <img src={logo} alt='logo' />
            </div>

            <div className='menubar'>
                <ul>
                    <li className='menuitem'><a href='#Current Edition'>Current Edition</a></li>
                    <li className='menuitem'><a href='./App.js'>Archive</a></li>
                    <li className='menuitem'><a href='#About'>About</a></li>
                    <li className='menuitem'><a href='#Facebook Page'>Facebook Page</a></li>
                    <li className='menuitem'><a href='#Contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;

