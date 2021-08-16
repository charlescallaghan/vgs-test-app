import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../vgs-logo.svg'

function Nav() {

    return (
        <nav>
            <h1><img src={logo}></img></h1>
            <ul className='nav-links'>
                <Link to='/'>
                    <li>Collect Form</li>
                </Link>
                <Link to='/reveal'>
                    <li>Reveal Form</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;