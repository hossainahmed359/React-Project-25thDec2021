import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import img from './home.png'

const Banner = () => {
    return (
        <div>
            <div className='container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '' }}>

                <div className='text-start' style={{ maxWidth: '500px' }}>
                    <h1 style={{ fontSize: '3rem' }}>Latest Collections</h1>
                    <h1>2021</h1>
                    <p style={{ fontSize: '1.5rem' }}>Watch Shop uses cookies to ensure that we give you the best experience on our website.</p>
                    <Button variant='dark' className='px-3 py-2'>Buy Now</Button>
                </div>
                <div style={{ backgroundColor: '#FFB568' }}>
                    <img style={{ maxWidth: '500px', objectFit: 'cover', padding: '10px 0' }} src={img} alt="" />
                </div>

            </div >
        </div>

    );
};

export default Banner;