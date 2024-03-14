// Navbar.jsx
import React from 'react';
import { auth } from '../Firebase/config';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuth, signUserOut }) => {


    return (
        <nav className="navbar navbar-expand-lg" style={{ position: 'fixed', top: 0, width: '100%', marginBottom: '500px' }}>
            <div className="container-fluid">

                <span className="navbar-brand text-white font-weight-bold">ERPSystem</span>


                <div className="ml-auto order-2">

                    <Link to="/dashboard" className="">
                        Dashboard
                    </Link>
                    <Link to="/products" className="">
                        Products
                    </Link>
                    <Link to="/orders" className="">
                        Orders
                    </Link>

                    <Link to="/" className="logout" onClick={signUserOut}>

                        Logout

                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
