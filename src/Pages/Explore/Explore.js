import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { Container, Row } from 'react-bootstrap';
import SingleService from '../Shared/Servies/SingleService/SingleService';
import Footer from '../Shared/Footer/Footer';


const Explore = () => {

    // get products and set data using state
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pure-badlands-75944.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);



    // custom style
    const custombg = {
        background: `url("https://i.ibb.co/xCQSRXW/servies-banner.jpg")`,
        height: '150px'
    }

    return (
        <div >
            <Navigation></Navigation>
            <div className="d-flex align-items-center justify-content-center mb-5" style={custombg}>
                <h1 style={{ color: '#E52727', fontFamily: "'Poppins', sans-serif", fontWeight: '600' }} className='my-5'>EXPLORE YOUR DREAM</h1>
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