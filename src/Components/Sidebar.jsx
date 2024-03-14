import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/config';
import './Sidebar.css';

const Sidebar = ({ isAuth, signUserOut }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('sidebar-open', isOpen);
    };

    return (
        <div className={`border-right ${isOpen ? 'open' : ''}`} id="sidebar">
            <div className="list-group list-group-flush">
                {/* Sidebar items with links */}
                <span className="brand-name">ERPSystem</span>
                <div className="nav-links">
                    <Link to="/dashboard" className="">
                        Dashboard
                    </Link>
                    <Link to="/products" className="">
                        Products
                    </Link>
                    <Link to="/orders" className="">
                        Orders
                    </Link>
                </div>
                {/* <div className="copywrite">Made By Sonika</div> */}

                <Link to="/" className="logout" onClick={signUserOut}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                        <g clip-path="url(#clip0_22_962)">
                            <path d="M13.3636 7.03511L12.2771 8.1216L13.4946 9.34679H7.1991V10.8879H13.4946L12.2771 12.1054L13.3636 13.1996L16.4458 10.1173L13.3636 7.03511ZM4.11686 4.72343H9.51078V3.18231H4.11686C3.26925 3.18231 2.57574 3.87582 2.57574 4.72343V15.5113C2.57574 16.3589 3.26925 17.0524 4.11686 17.0524H9.51078V15.5113H4.11686V4.72343Z" fill="#273A34" />
                        </g>
                        <defs>
                            <clipPath id="clip0_22_962">
                                <rect width="18.4934" height="18.4934" fill="white" transform="translate(0.263916 0.869965)" />
                            </clipPath>
                        </defs>
                    </svg>
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
