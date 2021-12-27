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

            <h3 style={{ color: '' }} className='py-5'>Blogs</h3>
            <Container className="mb-5">
                <Row xs={1} md={2} lg={3} className="g-5">
                    <Col>
                        <Card className="product-card">
                            <Card.Img style={{ height: '250px', width: '100%', objectFit: 'cover', margin: '0 auto' }} variant="top" src="https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                            <Card.Body >
                                <Card.Text style={{ fontSize: '15px', fontWeight: '500', textAlign: 'start', marginBottom: '10px' }}>
                                    It is time for a new article in our series dedicated to some of the best timepieces introduced in 2021 in various categories.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="product-card">
                            <Card.Img style={{ height: '250px', width: '100%', objectFit: 'cover', margin: '0 auto' }} variant="top" src="https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1910&q=80" />
                            <Card.Body>
                                <Card.Text style={{ fontSize: '15px', fontWeight: '500', textAlign: 'start', marginBottom: '10px' }}>
                                    It is time for a new article in our series dedicated to some of the best timepieces introduced in 2021 in various categories.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="product-card">
                            <Card.Img style={{ height: '250px', width: '100%', objectFit: 'cover', margin: '0 auto' }} variant="top" src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                            <Card.Body>
                                <Card.Text style={{ fontSize: '15px', fontWeight: '500', textAlign: 'start', marginBottom: '10px' }}>
                                    It is time for a new article in our series dedicated to some of the best timepieces introduced in 2021 in various categories.
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