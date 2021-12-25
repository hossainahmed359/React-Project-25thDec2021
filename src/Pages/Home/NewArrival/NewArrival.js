import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import './NewArrival.css'

// https://i.ibb.co/sCdrjcB/bmw-bike.png

const NewArrival = () => {
    return (
        <div className="my-5">
            <div>
                <h2 style={{ color: '#E52727' }} className='my-5'>New Arrival</h2>
            </div>
            <Container>
                <Row xs={1} md={1} lg={2} className="g-4" style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                    <Col >
                        <Card className="border-0">
                            <Card.Img className="arrival-image" variant="top" src="https://i.ibb.co/sCdrjcB/bmw-bike.png" />
                        </Card>
                    </Col>

                    <Col>
                        <Card className="border-0">
                            <Card.Body className="text-start">
                                <div>
                                    <h1 style={{ fontSize: '50px', fontWeight: '600' }}>Our Latest</h1>
                                    <h1 style={{ fontSize: '50px', fontWeight: '600' }}>Collection</h1>
                                </div>
                                <Card.Text className="my-4 pe-5" >
                                    <span style={{ fontSize: '35px', color: '#E52727' }}>$1401.19</span>
                                    <del className="ms-2" style={{ fontSize: '20px', color: 'gray' }}>$1501.19</del>
                                </Card.Text>
                                <Card.Text className="my-4 pe-5" style={{ fontSize: '20px', fontFamily: "roboto", textAlign: 'justify' }}>
                                    BMW Motorrad was created as a wholly-owned subsidiary of BMW in 1921, to handle building motorcycle and aircraft engines. The first BMW motorcycle was the boxer-engined R32 in 1923, and the company has enjoyed strong European and worldwide sales ever since with a variety of engines and motorcycles.
                                </Card.Text>
                                <Button variant="danger rounded-pill py-2 px-3 my-2" style={{ fontFamily: "Poppins" }}>Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewArrival;