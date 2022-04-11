import React, {useState} from "react";
import {FaBars} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    return(
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                        <FaBars/>
                    </button>
                </div>
                <div className={`${showLinks ? 'links-container show-container' : 'links-container'}`}>
                    <ul className="links">
                        <li>
                            <Link to='/'>Tenders</Link>
                        </li>
                        <li>
                            <Link to='/suppliers'>Suppliers</Link>
                        </li>
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                    </ul>
                </div>
                <ul className="profile">
                    <li>
                        <Link to='/tender/add'>add a tender</Link>
                    </li>
                    <li>
                        <Link to='/company/add'>add a company</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;