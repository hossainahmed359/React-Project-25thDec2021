import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServicesHeader from '../ServicesHeader/ServicesHeader';
import SingleService from '../SingleService/SingleService';

/// id needs to be added from database

const Services = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pure-badlands-75944.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <ServicesHeader></ServicesHeader>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-5 my-5">
                    {products.map(product => products.indexOf(product) < 6 &&
                        <SingleService
                            key={product._id}
                            product={product}
                        ></SingleService>)}
                </Row>
            </Container>

        </div>
    );
};

export default Services;