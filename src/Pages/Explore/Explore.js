import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { Container, Row } from 'react-bootstrap';
import SingleService from '../Shared/Servies/SingleService/SingleService';
import Footer from '../Shared/Footer/Footer';


const Explore = () => {

    // get products and set data using state
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-spire-81873.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);




    return (
        <div >
            <Navigation></Navigation>
            <div className="d-flex align-items-center justify-content-center mb-5" >
                <h3 className='py-5'>EXPLORE YOUR DREAM</h3>
            </div>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-5 mb-5">
                    {products.map(product =>
                        <SingleService
                            key={product._id}
                            product={product}
                        ></SingleService>)}
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Explore;