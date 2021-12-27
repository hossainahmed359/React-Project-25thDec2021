import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css'

const Navigation = () => {

    // Firebase
    const { user, handleSignOut } = useAuth();


    return (
        <>
            <Navbar className="border border-bottom fs-5" expand="lg" style={{ fontWeight: '400', fontFamily: 'roboto' }}>
                <Container className="my-2">
                    <NavLink className="brand-name" to="/home">Watch Store</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navigation ms-auto" >
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/explore">Explore</NavLink>
                            {user.email && <NavLink to="/dashboard">Dashboard</NavLink>}
                            {user.displayName &&
                                <NavLink
                                    className="text-dark"
                                    to="#" disabled
                                ><span>{user.displayName}</span></NavLink>
                            }
                            {user.email ?
                                <Button onClick={handleSignOut} variant="outline-danger">Log Out</Button>
                                :
                                <NavLink to="/login">Login</NavLink>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Navigation;