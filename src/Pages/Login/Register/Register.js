import React, { useState } from 'react';
import { Card, Col, Container, FormControl, InputGroup, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {

    // Firebase
    const { handleEmailRegistration, handleGoogleSignIn, isLoading, error, setError } = useAuth();

    // History and Location
    const location = useLocation();
    const navigate = useNavigate()

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
        if (loginData.password === loginData.password2) {
            // console.log(loginData)
            handleEmailRegistration(loginData.name, loginData.email, loginData.password, navigate)
            e.target.reset()
        }
        else {
            setError('Retype Your Password Again')
        }
    }

    // Google signIn
    const useGoogleSignIn = () => {
        handleGoogleSignIn(location, navigate);
    }


    return (
        <div>
            <Navigation></Navigation>
            {isLoading ?
                <div className="mt-5 pt-5 fs-1"><Spinner animation="border" variant="danger" /> </div>
                :
                <Container className="mt-5 pt-5">
                    <Col sm={12} md={7} lg={4} className="mx-auto border-0 shadow">
                        <Card className="border-0 " style={{ fontFamily: 'roboto' }}>
                            <Card.Body>
                                <Card.Title className="fs-2 text-danger">Register</Card.Title>
                                <form id="login-from" onSubmit={handleOnSubmit}>
                                    <InputGroup className="my-3">
                                        <FormControl
                                            className="py-2"
                                            onBlur={handleOnBlur}
                                            name="name"
                                            type="name"
                                            placeholder="Your Name"
                                            aria-label="name"
                                            aria-describedby="basic-addon1"
                                            required
                                        />
                                    </InputGroup>
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
                                    <InputGroup className="my-3">
                                        <FormControl
                                            className="py-2"
                                            onBlur={handleOnBlur}
                                            name="password2"
                                            type="password"
                                            placeholder="Retype Your Password"
                                            aria-label="password2"
                                            aria-describedby="basic-addon1"
                                            required
                                        />
                                    </InputGroup>
                                    {error && <Card.Text className="text-danger">{error}</Card.Text>}
                                    <Link style={{ textDecoration: 'none' }} to="/login">Already have an account ?</Link><br />
                                    <Button
                                        type="submit"
                                        variant="danger"
                                        className="w-75 px-3 py-2 my-2 border rounded-pill"
                                    >
                                        Submit
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

        </div>
    );
};

export default Register;