import React from 'react';
import { Container, Nav , Navbar as Appbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="header">
            
            <Appbar  expand="md" className="navbar-dark">
                <Appbar.Toggle aria-controls="AppbarScroll" />
                <Appbar.Collapse id="AppbarScroll">
                <Container>
                    <Nav
                        className=" my-lg-0 justify-content-end "
                        
                        AppbarScroll
                    >
                        <Link to="/home">Home</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/courses">Courses</Link>
                        <Link to="/contact">Contact us</Link>
                     
                      
                    </Nav>
                    </Container>
                   
                </Appbar.Collapse>
            </Appbar>
           
        </div>
    );
};

export default Navbar;