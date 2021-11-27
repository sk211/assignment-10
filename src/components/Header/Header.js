import React from 'react';
import { Container, Nav, Navbar as Appbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
// import Navbar from './components/Navbar/Navbar';

import "./Header.css"
const Header = () => {
    const { user, logOut } = useAuth()
    return (

        <div className="header">
            <div className="header">

                <Appbar expand="md" className="navbar-dark">
                    <Appbar.Toggle aria-controls="AppbarScroll" />
                    <Appbar.Collapse id="AppbarScroll">
                        <Container>
                            <Nav
                                className=" my-lg-0 justify-content-end "

                                AppbarScroll
                            >
                                <Link to="/home">Home</Link>
                                <Link to="/about">About us</Link>
                                <Link to="/service">Service</Link>
                                <Link to="./regester">regester</Link>
                                <Link to="./login">Login</Link>


                                <Link to="/contact">Contact us</Link>
                                <span className="text-light">{user.email}</span>
                                {
                                    user?.email &&
                                    <button onClick={logOut}>Logout</button>



                                }

                            </Nav>
                        </Container>

                    </Appbar.Collapse>
                </Appbar>

            </div>
            {/* <Link to="/home">Home</Link>
            <Link to="/shiping">Shiping</Link>
            <Link to="./order">Order</Link> */}



        </div>
    );
};

export default Header;