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
        <div>
            <Col>
                <Card className="product-card">
                    <div className="parentDiv">
                        <Card.Img variant="top" className="border rounded" src={image} />
                    </div>
                    <Card.Body className="text-start">
                        <Card.Title className="fs-3">{name}</Card.Title>
                        <Card.Text className="fs-2" style={{ color: '#E52727' }}>${price}</Card.Text>
                        <Card.Text style={{ fontFamily: "'roboto", textAlign: 'justify' }}>
                            {description.slice(0, 130)}...
                        </Card.Text>
                    </Card.Body>
                    <Link to={`/purchase/${_id}`}><Button className="w-50 mx-auto mb-4" variant="danger">
                        <span className="px-2">{cartIcon}</span>
                        Buy Now</Button></Link>
                </Card>
            </Col>
        </div>
    );
};

export default SingleService;