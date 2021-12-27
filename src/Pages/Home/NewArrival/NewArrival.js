import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import './NewArrival.css'

// https://i.ibb.co/sCdrjcB/bmw-bike.png
import img from '../../story.png'

const NewArrival = () => {
    return (
        <div className="my-5">
            <div>
                <h3 style={{ color: '' }} className='py-5'>News</h3>
            </div>
            <Container>
                <Row xs={1} md={1} lg={2} style={{ flexDirection: 'row-reverse ', alignItems: 'center' }}>
                    <Col>
                        <Card className="border-0">
                            <Card.Body className="text-start">
                                <div>
                                    <h1 style={{ fontSize: '50px', fontWeight: '600' }}>New Arrival</h1>

                                </div>
                                <Card.Text className="my-4 pe-5" >
                                    <span style={{ fontSize: '35px', color: '#FFB568' }}>$1401.19</span>
                                    <del className="ms-2" style={{ fontSize: '20px', color: 'gray' }}>$1501.19</del>
                                </Card.Text>
                                <Card.Text className="my-4 pe-5" style={{ fontSize: '20px', fontFamily: "", textAlign: 'justify' }}>
                                    Watch Shop uses cookies to ensure that we give you the best experience on our website. If you continue we assume that you consent to receive all cookies on our website.
                                </Card.Text>
                                <Button variant="dark py-2 px-3 my-2" style={{ fontFamily: "" }}>Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="border-0">
                            <Card.Img className="arrival-image" variant="top" src={img} />
                        </Card>
                    </Col>


                </Row>
            </Container>
        </div>
    );
};

export default NewArrival;