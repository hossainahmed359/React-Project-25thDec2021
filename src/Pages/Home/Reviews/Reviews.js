import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleReview from './SingleReview/SingleReview';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons' */

const Reviews = () => {


    // Set Loaded Ratings
    const [ratings, setRatings] = useState([]);

    // Load Ratings
    useEffect(() => {
        fetch('https://murmuring-spire-81873.herokuapp.com/ratings')
            .then(res => res.json())
            .then(data => setRatings(data));
    }, []);




    return (
        <div >
            <h3 style={{ color: '' }} className='py-5'>Reviews</h3>

            <Container>
                <Row xs={1} md={2} lg={3} className="g-3 mb-5">
                    {ratings.map(sigleRating => <SingleReview key={sigleRating._id} sigleRating={sigleRating}></SingleReview>)}
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;