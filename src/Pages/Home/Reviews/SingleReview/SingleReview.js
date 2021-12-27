import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from '@mui/material/Rating';


// placeholder image
const placeHolderImage = `https://i.ibb.co/t4zRwZj/New-Project.png`

const SingleReview = ({ sigleRating }) => {

    const { name, description, starRating } = sigleRating;

    // Set placeholder image if user photo is not available
    if (!sigleRating.image) {
        sigleRating.image = placeHolderImage;
    }


    return (
        <div >
            <Col>
                <Card className="product-card border">
                    <Card.Img style={{ width: "70px", margin: 'auto', padding: '10px 0' }} variant="top" src={sigleRating?.image} />
                    <Card.Body className="text-start">
                        <Card.Title style={{ fontSize: '25px', fontWeight: '500', textAlign: 'start', marginBottom: '10px' }}>{name}</Card.Title>
                        <Card.Text style={{ fontFamily: 'roboto' }}>
                            {description.slice(0, 200)}
                        </Card.Text>
                        <Card.Text>
                            {<Rating name="read-only" style={{ color: '#FFB568' }} value={starRating} readOnly />}
                        </Card.Text>
                    </Card.Body>

                </Card>
            </Col>

        </div >
    );
};

export default SingleReview;