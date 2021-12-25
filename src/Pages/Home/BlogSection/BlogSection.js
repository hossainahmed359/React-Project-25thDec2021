import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';


/* 
https://i.ibb.co/TTRDGPY/New-Project-4.png
https://i.ibb.co/71pGrks/New-Project-2.png
https://i.ibb.co/ZT1ykvP/New-Project-1.png
*/


const BlogSection = () => {
    return (
        <div >
            <br />
            <h2 style={{ color: '#E52727' }} className='my-5'>Blogs</h2>
            <Container className="mb-5">
                <Row xs={1} md={2} lg={3} className="g-5">
                    <Col>
                        <Card className="product-card">
                            <Card.Img variant="top" src="https://i.ibb.co/ZT1ykvP/New-Project-1.png" />
                            <Card.Body >
                                <Card.Text style={{ fontSize: '20px', fontWeight: '500', textAlign: 'start', marginBottom: '10px' }}>
                                    Electric cars aren’t pollution-free; they have to get their energy from ..
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="product-card">
                            <Card.Img variant="top" src="https://i.ibb.co/71pGrks/New-Project-2.png" />
                            <Card.Body>
                                <Card.Text style={{ fontSize: '20px', fontWeight: '500', textAlign: 'start', marginBottom: '10px' }}>
                                    You can know or not know how a car runs and still enjoy riding in a car
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="product-card">
                            <Card.Img variant="top" src="https://i.ibb.co/TTRDGPY/New-Project-2.png" />
                            <Card.Body>
                                <Card.Text style={{ fontSize: '20px', fontWeight: '500', textAlign: 'start', marginBottom: '10px' }}>
                                    Kawasaki Heavy Industries was started in 1878, as a producer..
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br />
        </div>
    );
};

export default BlogSection;