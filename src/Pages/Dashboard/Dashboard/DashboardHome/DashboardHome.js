import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link, useMatch } from 'react-router-dom';

// React Router Components



const DashboardHome = () => {

    const { user, admin } = useAuth();




    return (
        <div className='dashboard-navigation'>
            <Container>
                <br />
                <h2 style={{ fontFamily: '', marginTop: '20px', color: 'black', textAlign: 'start' }}>User Information</h2>
                <br />
                <Grid item xs={12} md={12} lg={12}>
                    <Grid item xs={12} md={6} lg={4} style={{ marginTop: '15px', textAlign: 'start', fontFamily: 'poppins' }}>
                        <h5>Name : {user.displayName}</h5>
                        <h5>Email : {user.email}</h5>
                        <div style={{ color: '#FFB568 ' }}>
                            {admin ? <h5>Role : Admin</h5> : <h5>Customer</h5>}
                        </div>
                    </Grid>
                    <br />
                    <Grid item xs={12} md={6} lg={4} style={{ marginTop: '15px', textAlign: 'start', fontFamily: 'poppins' }}>
                        {admin ?
                            <div>
                                <h5>Admin Dashboard</h5>
                                <p style={{ textAlign: 'justify' }}>You can <span style={{ color: '#FFB568 ' }}>Manage Orders</span>, <span style={{ color: '#FFB568 ' }}>Add a product</span> or <span style={{ color: '#FFB568 ' }}>Delete </span> it if necessary from the links below or navigate the from the bar .You are also authorized to make an <span style={{ color: '#FFB568 ' }}>Amin</span></p>
                                <ul style={{ marginLeft: '-30px' }}>
                                    <li><Link to={`/dashboard/manageAllOrders`}>Manage All Orders</Link></li>
                                    <li> <Link to={`/dashboard/addProduct`}>Add A Product</Link></li>
                                    <li><Link to={`/dashboard/mangeProducts`}> Manage Products</Link></li>
                                    <li><Link to={`/dashboard/makeAdmin`}>Make Admin</Link></li>
                                </ul>
                            </div>
                            :
                            <div>
                                <h5 >Welcome to Dashboard</h5>
                                <p style={{ textAlign: 'justify' }}>Check out your <span style={{ color: '#FFB568 ' }}>Orders</span>, <span style={{ color: '#FFB568 ' }}>Pay</span> or <span style={{ color: '#FFB568 ' }}>Delete </span> from the links below or navigate the from the bar . Feel free to give us your valueable <span style={{ color: '#FFB568 ' }}>Review</span></p>
                                <ul style={{ marginLeft: '-30px' }}>
                                    <li><Link to={`/dashboard/payment`}> Payment</Link></li>
                                    <li> <Link to={`/dashboard/myOrders`}>My Orders</Link></li>
                                    <li><Link to={`/dashboard/review`}> Review</Link></li>
                                </ul>
                            </div>
                        }
                    </Grid>

                </Grid>

            </Container>

        </div>
    );
};

export default DashboardHome;