import React from 'react';
import logo from './FKN_title_TRANSP2.png';

const NavBar = () => {
    return (
        <nav className='Navbar'>
            <div>
                <img src={logo} alt='logo' />
            </div>

            <div className='Menubar'>
                <ul>
                    <li className='Menuitem'><a href='#Current Edition'>Current Edition</a></li>
                    <li className='Menuitem'><a href='./App.js'>Archive</a></li>
                    <li className='Menuitem'><a href='#About'>About</a></li>
                    <li className='Menuitem'><a href='#Facebook Page'>Facebook Page</a></li>
                    <li className='Menuitem'><a href='#Contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;

