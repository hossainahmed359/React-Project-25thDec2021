import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


const ManageProducts = () => {

    // Reload Status
    const [relaod, setReload] = useState(false)


    // Store Porducts 
    const [products, setProducts] = useState([]);

    // Get Products
    useEffect(() => {
        fetch(`https://murmuring-spire-81873.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            });
    }, [relaod]);


    // Handle Delete
    const handleDelete = productId => {
        setReload(false)
        const proceed = window.confirm('Are you sure you want to delete this product ?')
        if (proceed) {
            fetch(`https://murmuring-spire-81873.herokuapp.com/deleteProduct/${productId}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Product Deleted');
                        setReload(true)
                    }
                })
        }
    }



    //
    return (
        <div>
            <h2 style={{ fontFamily: 'roboto', marginTop: '20px', color: 'black' }}>Manage Products</h2>
            <Container >
                <div >
                    <h5 style={{ fontFamily: 'roboto', marginTop: '40px', textAlign: 'start' }}>Total Prodcuts {products.length}</h5>
                </div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, md: 12, lg: 12 }}>
                        {products.map(singleProduct =>
                            <Grid key={singleProduct._id} item xs={4} md={6} lg={4} style={{ marginTop: '15px' }}>
                                <Card className="single-order-card" sx={{ maxWidth: 345 }} >
                                    <CardMedia
                                        style={{ width: '100px', height: '170px', objectFit: 'cover', margin: '10px auto' }}
                                        component="img"
                                        image={singleProduct.image}
                                        alt=""
                                    />
                                    <CardContent style={{ textAlign: 'start', fontFamily: 'oswald' }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {singleProduct.name}
                                        </Typography >
                                        <Typography style={{ color: '#FFB568' }} gutterBottom variant="h5" component="div">
                                            ${singleProduct.price}
                                        </Typography>
                                        <Typography variant="body2" color="">
                                            {singleProduct.description.slice(0, 120)}...
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => handleDelete(singleProduct._id)} style={{ margin: 'auto', marginBottom: '15px' }} variant="contained" color="error">Delete Product</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default ManageProducts;