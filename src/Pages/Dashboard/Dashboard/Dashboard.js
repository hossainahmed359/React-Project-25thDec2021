import React from 'react';
import './Dashboard.css'

// Material UI components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../Hooks/useAuth';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCreditCard, faShoppingCart, faStar, faSignOutAlt, faTasks, faPlusSquare, faUserPlus, faMinusCircle, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

// React Router Components


import Button from '@mui/material/Button';

import { Link, Outlet, useNavigate } from 'react-router-dom';


// Drawer Width
const drawerWidth = 250;


// ****************************** Main Funciton ******************************
const Dashboard = () => {

    // Load Signed In User
    const { handleSignOut, admin } = useAuth();


    // Dashboard Options
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };




    // History
    const navigate = useNavigate()

    // Go back home 
    const handleBackToHome = () => {
        const proceed = window.confirm('Leave Dashboard ?');
        if (proceed) {
            navigate('/')
        }
    }

    // User Sign Out
    const handleLogOut = () => {
        const proceed = window.confirm('Are you sure you want to log out ?');
        if (proceed) {
            handleSignOut();
        }
    }


    // Font Awesome Icons
    const homeIcon = <FontAwesomeIcon icon={faHome} />
    const paymentIcon = <FontAwesomeIcon icon={faCreditCard} />
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const startIcon = <FontAwesomeIcon icon={faStar} />
    const logOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />
    const taskIcon = <FontAwesomeIcon icon={faTasks} />
    const plusIcon = <FontAwesomeIcon icon={faPlusSquare} />
    const userAddIcon = <FontAwesomeIcon icon={faUserPlus} />
    const productManageIcon = <FontAwesomeIcon icon={faMinusCircle} />
    const leftArrowIcon = <FontAwesomeIcon icon={faArrowAltCircleLeft} />


    // Drawer
    const drawer = (
        <div>
            {/*  <Toolbar />
            <Divider /> */}
            {/* ****************************************** General User And Admin Links ****************************************** */}
            <List>
                <div className="dashboard-navigation" style={{ overflow: 'hidden' }}>
                    <ul>
                        <li><Button onClick={handleBackToHome} style={{ margin: '10px -6px', marginBottom: '20px', color: 'black', fontFamily: 'poppins' }} ><span style={{ marginRight: '10px' }}>{leftArrowIcon}</span> Back To Home</Button></li>
                        <li><Link to={`/dashboard`}><span>{homeIcon}</span> Default</Link></li>
                    </ul>
                    {admin ?
                        <ul>
                            <li><Link to={`/dashboard/manageAllOrders`}><span>{taskIcon}</span> Manage All Orders</Link></li>
                            <li> <Link to={`/dashboard/addProduct`}><span style={{ marginRight: '8px' }}>{plusIcon}</span> Add A Product</Link></li>
                            <li><Link to={`/dashboard/mangeProducts`}><span>{productManageIcon}</span> Manage Products</Link></li>
                            <li><Link to={`/dashboard/makeAdmin`}><span>{userAddIcon}</span> Make Admin</Link></li>
                        </ul>
                        :
                        <ul>
                            <li><Link to={`/dashboard/payment`}><span >{paymentIcon}</span> Payment</Link></li>
                            <li> <Link to={`/dashboard/myOrders`}><span>{cartIcon}</span> My Orders</Link></li>
                            <li><Link to={`/dashboard/review`}><span>{startIcon}</span> Review</Link></li>
                        </ul>
                    }
                    <ul>
                        <li><Button onClick={handleLogOut} variant="outlined" style={{ marginTop: '25px' }} color="error"><span style={{ color: 'red' }}>{logOutIcon}</span> Log Out</Button></li>
                    </ul>
                </div>
            </List>
        </div>
    );




    // *********************** Return ***********************
    return (
        <div>
            {/* Drawer */}
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        backgroundColor: 'white',
                        color: '#FFB568 ',
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        // container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />

                    {/* ****************************************** General User and Admin Routes ****************************************** */}


                    <Outlet></Outlet>
                </Box>
            </Box>
        </div>
    );
};

export default Dashboard;