import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder/SingleOrder';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


const MyOrders = ({ userEmail }) => {


    // Store Orders
    const [allOrders, setAllOrders] = useState([]);


    // Delete Confirmation to load data again
    const [deleteConfirm, setDeleteConfirm] = useState(false);


    // Find All Orders 
    useEffect(() => {
        fetch(`https://murmuring-spire-81873.herokuapp.com/findOrder/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setAllOrders(data);
            });
    }, [deleteConfirm]);



    // Cancel Order
    const handleCancelOrder = orderId => {
        setDeleteConfirm(false);
        const proceed = window.confirm('Are you sure you want to cancel the order ?')
        if (proceed) {
            fetch(`https://murmuring-spire-81873.herokuapp.com/deleteOrder/${orderId}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const confirmation = window.alert('Order Cancelled');
                        setDeleteConfirm(true)
                    }
                })
        }
    }


    // Return
    return (
        <Container fixed>
            <div >
                <h2 style={{ color: 'black', margin: '20px 0', fontWeight: '600', fontFamily: 'poppins' }}>My Orders</h2>
                <h5 style={{ fontFamily: 'roboto', marginTop: '40px', textAlign: 'start' }}>Orders {allOrders.length}</h5>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                    {allOrders.map(order => (
                        <Grid item xs={4} sm={4} md={6} lg={4} key={order._id}>
                            <SingleOrder
                                key={order._id}
                                order={order}
                                handleCancelOrder={handleCancelOrder}
                            ></SingleOrder>

                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default MyOrders;