import React, { useState } from 'react';
import { Card, Col, Container, FormControl, InputGroup, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {

    // Firebase
    const { handleEmailSignIn, handleGoogleSignIn, isLoading, error } = useAuth();

    // History and Location
    const location = useLocation();
    const navigate = useNavigate();

    // setting user input data
    const [loginData, setLoginData] = useState({});

    // Handle input field Changes
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...loginData };
        newUser[field] = value;
        setLoginData(newUser);
    }

    // Handle Form Submit
    const handleOnSubmit = e => {
        e.preventDefault();
        handleEmailSignIn(loginData.email, loginData.password, location, navigate)
        // console.log(loginData)
        e.target.reset()
    }

    // Google signIn
    const useGoogleSignIn = () => {
        handleGoogleSignIn(location, navigate);
    }

    return (
        <div >
            <Navigation></Navigation>
            {isLoading ?
                <div className="mt-5 pt-5 fs-1"><Spinner animation="border" variant="danger" /> </div>
                :
                <Container className="mt-5 pt-5">
                    <Col sm={12} md={7} lg={4} className="mx-auto border-0 shadow">
                        <Card className="border-0 " style={{ fontFamily: 'roboto' }}>
                            <Card.Body>
                                <Card.Title className="fs-2 text-danger">Login</Card.Title>
                                <form id="login-from" onSubmit={handleOnSubmit}>
                                    <InputGroup className="my-3">
                                        <FormControl
                                            className="py-2"
                                            onBlur={handleOnBlur}
                                            name="email"
                                            type="email"
                                            placeholder="Your Email"
                                            aria-label="email"
                                            aria-describedby="basic-addon1"
                                            required
                                        />
                                    </InputGroup>
                                    <InputGroup className="my-3">
                                        <FormControl
                                            className="py-2"
                                            onBlur={handleOnBlur}
                                            name="password"
                                            type="password"
                                            placeholder="Your Password"
                                            aria-label="password"
                                            aria-describedby="basic-addon1"
                                            required
                                        />
                                    </InputGroup>
                                    {error && <Card.Text className="text-danger">{error}</Card.Text>}
                                    <Link style={{ textDecoration: 'none' }} to="/register">New User ? Go to Registration</Link><br />
                                    <Button
                                        type="submit"
                                        variant="danger"
                                        className="w-75 px-3 py-2 my-2 border rounded-pill"
                                    >
                                        Login
                                    </Button>
                                </form>
                                <Button
                                    onClick={useGoogleSignIn}
                                    variant="success"
                                    className="w-75 px-3 py-2 my-2 border rounded-pill"
                                >
                                    Continue With Google
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Container >
            }

        </div >
    );
};

export default Login;