import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar' style={{ backgroundColor: 'white', }}>
            <ul><li><b>Like Me 💓</b></li></ul>
            <l1>
            <ul className="navbar">
                <li><Link to="/">BrowseEvent</Link></li>
                <li><Link to="/HostEvents">HostEvent</Link></li>
                <li><a>
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                         Register/Login
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div className="item"><Link to='/Register'>Register</Link></div>
                                <div className="item"><Link to='/Login'>Login</Link></div>
                            </div>
                        </div>
                     </div>
                </a></li>
            </ul>
            </l1>
        </div>
    );
};

export default Navbar;
