import React, { useState } from 'react';
import { Card, FormControl, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';



const UserInfo = ({ user, singleProduct }) => {

    // User State
    const [userInfo, setUserInfo] = useState({ name: user.displayName, email: user.email });

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const updatedUser = { ...userInfo };
        updatedUser[field] = value;
        setUserInfo(updatedUser);
        // console.log(userInfo)
    }

    // Handle Button Submit
    const handleOnSubmit = e => {
        e.preventDefault();
        const cart = { productId: singleProduct._id, status: 'pending' }
        const order = { ...userInfo, cart };
        // console.log(order)


        // Send Data to the server
        fetch('https://pure-badlands-75944.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    alert('Product added to the cart');
                    e.target.reset();
                }
            })
    }



    // font awesome
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />

    return (
        <div className="mx-auto">
            <Card
                className="border-0">
                <Card.Body>
                    <Card.Title className="fs-3 text-start">User Details</Card.Title>
                    <form onSubmit={handleOnSubmit} style={{ fontFamily: 'roboto' }}>
                        <InputGroup className="my-3">
                            <FormControl
                                className="py-3"
                                onBlur={handleOnBlur}
                                defaultValue={user.displayName}
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                aria-label="name"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </InputGroup>
                        <InputGroup className="my-3">
                            <FormControl
                                className="py-3"
                                onBlur={handleOnBlur}
                                defaultValue={user.email}
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
                                className="py-3"
                                onBlur={handleOnBlur}
                                name="number"
                                type="number"
                                placeholder="Your Phone Number"
                                aria-label="password"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </InputGroup>
                        <InputGroup className="my-3">
                            <FormControl
                                className="py-3"
                                onBlur={handleOnBlur}
                                name="location"
                                type="text"
                                placeholder="Your Loaction"
                                aria-label="location"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </InputGroup>

                        <Button
                            type="submit"
                            variant="danger"
                            className="w-100 px-3 py-3 my-2 border rounded-pill"
                        ><span className="px-2">{cartIcon}</span>
                            Add To Cart
                        </Button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserInfo;