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
        fetch('https://pure-badlands-75944.herokuapp.com/ratings')
            .then(res => res.json())
            .then(data => setRatings(data));
    }, []);


    // CSS for banner
    /*   const custombg = {
          background: `url("https://i.ibb.co/xCQSRXW/servies-banner.jpg")`,
          height: '170px'
      } */

    // fontawesome
    /* const starIcon = <FontAwesomeIcon icon={faStarHalf} /> */

    return (
        <div style={{ margin: '70px 0' }}>
            <div className="d-flex align-items-center justify-content-center"/*  style={{ ...custombg, borderRadius: '10px' }} */>
                <h2 style={{ color: '#E52727' }} className=''>{/* <span style={{ marginRight: "-20px" }} className="fs-1">{starIcon}</span> */} Reviews</h2>
            </div>
            <Container>

            </Container>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4 my-5">
                    {ratings.map(sigleRating => <SingleReview key={sigleRating._id} sigleRating={sigleRating}></SingleReview>)}
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;