import React, { useState } from 'react';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const AddProduct = () => {

    // Store Input Data
    const [productData, setProductData] = useState({});

    // Handle Input Fields
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...productData };
        newData[field] = value;
        setProductData(newData);
    }

    // Send all the data to the database
    const handleOnSubmit = e => {
        e.preventDefault();

        // sending data to database
        fetch(`https://murmuring-spire-81873.herokuapp.com/addProduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added to Database');
                    e.target.reset();
                }
            });

        //
    }

    return (
        <div style={{ fontFamily: 'roboto' }}>
            <Container style={{ marginTop: '50px' }}>
                <h4 style={{ textAlign: 'start' }}>Product Information</h4>
                <Grid item xs={12} md={10} lg={7}>
                    <form onSubmit={handleOnSubmit}
                        style={{ textAlign: 'start' }}
                    >
                        <TextField
                            onBlur={handleOnBlur}
                            style={{ width: '100%' }}
                            id="standard-basic"
                            label="Image Link"
                            variant="standard"
                            name="image"
                            type="text"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            style={{ width: '100%', marginTop: '20px' }}
                            id="standard-basic"
                            label="Product Name"
                            variant="standard"
                            name="name"
                            type="text"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            style={{ width: '100%', marginTop: '20px' }}
                            id="standard-basic"
                            label="$ Price"
                            variant="standard"
                            name="price"
                            type="number"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            style={{ width: '100%', marginTop: '40px' }}
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={5}
                            name="description"
                            type="text"
                        />
                        <Button type='submit' style={{ margin: '35px 3px' }} variant="contained">Submit Data</Button>
                    </form>
                </Grid>
            </Container>
        </div>
    );
};

export default AddProduct;

/*
image
name
price
description
*/