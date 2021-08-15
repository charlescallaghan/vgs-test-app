import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    
    return (
        <nav>
            <h1>VGS Test App</h1>
            <ul className='nav-links'>
                <Link to='/'>
                    <li>Collect Form</li>
                </Link>
                <Link to='/redact'>
                    <li>Redact Form</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;