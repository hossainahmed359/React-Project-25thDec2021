import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import './SingleOrder.css'

// Material UI
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';




// Main Function
const SingleOrder = ({ order, handleCancelOrder }) => {

    // Order ID
    const orderId = order._id;

    // Product ID and Status
    const productId = order?.cart?.productId;
    const status = order?.cart?.status;

    // Set Matheced Product
    const [product, setProduct] = useState([]);

    // Find Product With id
    useEffect(() => {
        fetch(`https://pure-badlands-75944.herokuapp.com/signleProduct/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const { image, name, price, description } = product;


    // font awesome
    const deleteIcon = <FontAwesomeIcon icon={faTrash} />



    return (
        <>
            <Card className="single-order-card" sx={{ maxWidth: 345, my: 2 }}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={image}
                    alt="Paella dish"
                />
                <CardContent>
                    <Box sx={{ textAlign: 'left', mb: '5' }}>
                        <Typography variant="h5">{name}</Typography>
                        <Typography variant="h5" style={{ margin: '10px 0' }} color="#E52727">${price}</Typography>
                        <Typography variant="body2" color="">
                            {description?.slice(0, 120)}...
                        </Typography>
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                        <> <Button onClick={() => handleCancelOrder(orderId)} variant="contained" color="error" ><span style={{ marginRight: '5px' }}>{deleteIcon}</span> Cancel</Button></>
                        <><Typography variant="h6" className={`${status === 'pending' ? "text-warning" : "text-success"}`}>{status}</Typography></>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default SingleOrder;