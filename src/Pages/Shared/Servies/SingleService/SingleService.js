import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './SingleService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const SingleService = ({ product }) => {
    const { _id, image, name, price, description } = product;

    // font awesome
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />


    return (
        <div className='single-service-container'>
            <Col>
                <Card className="product-card">
                    <div className="parentDiv">
                        <Card.Img variant="top" style={{ width: '100px', height: '190px', objectFit: 'cover' }} className="border-0 py-3" src={image} />
                    </div>
                    <Card.Body className="text-center">
                        <Card.Title className="fs-4">{name}</Card.Title>
                        <Card.Text className="fs-3" style={{ color: '#FFB568' }}>${price}</Card.Text>
                        {/*  <Card.Text style={{ fontFamily: "'roboto", textAlign: 'justify' }}>
                            {description.slice(0, 60)}...
                        </Card.Text> */}
                    </Card.Body>
                    <Link to={`/purchase/${_id}`}><Button className="mb-3" variant="dark">
                        <span className="px-2">{cartIcon}</span>
                        Buy Now</Button></Link>
                </Card>
            </Col>
        </div>
    );
};

export default SingleService;