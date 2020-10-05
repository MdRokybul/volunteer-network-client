import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>
                        <div className="logoStyle">
                        <img src="https://firebasestorage.googleapis.com/v0/b/volunteer-network-d8e29.appspot.com/o/logo.png?alt=media&token=a5f23b09-f552-42b6-9859-726bd7c02921" alt=""/>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <div className="link-style">
                            <Link className="link-style" to='/'>Home</Link>
                            <Link className="link-style" to='/donation'>Donation</Link>
                            <Link className="link-style" to='/eventList'>Events</Link>
                            <Link className="link-style" to='/blog'>Blog</Link>
                            <Link className="link-style" to="/volunteerRegistration">Register</Link>
                            <Link className="link-style" to='/admin'>Admin</Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </Container>
    );
};

export default Header;