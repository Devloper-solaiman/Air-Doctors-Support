import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
    <li><Link>Home</Link></li></>
    <li><Link>Appointment</Link></li></>
        <li><Link>Review</Link></li></>
            <li><Link>Contact</Link></li></>
                <li><Link>About</Link></li></>
    return (
        <div>

        </div>
    );
};

export default Navbar;