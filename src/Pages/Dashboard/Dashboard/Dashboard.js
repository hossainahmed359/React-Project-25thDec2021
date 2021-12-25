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
import {
    Route,
    Link,
    useRouteMatch,
    useHistory
} from "react-router-dom";


import Payment from '../UsersSection/Payment/Payment';
import MyOrders from '../UsersSection/MyOrders/MyOrders';
import Review from '../UsersSection/Review/Review';
import Button from '@mui/material/Button';
import MakeAdmin from '../AdminSection/MakeAdmin/MakeAdmin';
import DashboardHome from './DashboardHome/DashboardHome';
import ManageAllOrders from '../AdminSection/ManageAllOrders/ManageAllOrders';
import AddProduct from '../AdminSection/AddProduct/AddProduct';
import ManageProducts from '../AdminSection/ManageProducts/ManageProducts';


// Drawer Width
const drawerWidth = 250;


// ****************************** Main Funciton ******************************
const Dashboard = () => {

    // Load Signed In User
    const { user, handleSignOut, admin } = useAuth();


    // Dashboard Options
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Nested Route Options
    let { path, url } = useRouteMatch();


    // History
    const history = useHistory()

    // Go back home 
    const handleBackToHome = () => {
        const proceed = window.confirm('Leave Dashboard ?');
        if (proceed) {
            history.push('/')
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
                        <li><Link to={`${url}`}><span>{homeIcon}</span> Default</Link></li>
                    </ul>
                    {admin ?
                        <ul>
                            <li><Link to={`${url}/manageAllOrders`}><span>{taskIcon}</span> Manage All Orders</Link></li>
                            <li> <Link to={`${url}/addProduct`}><span style={{ marginRight: '8px' }}>{plusIcon}</span> Add A Product</Link></li>
                            <li><Link to={`${url}/mangeProducts`}><span>{productManageIcon}</span> Manage Products</Link></li>
                            <li><Link to={`${url}/makeAdmin`}><span>{userAddIcon}</span> Make Admin</Link></li>
                        </ul>
                        :
                        <ul>
                            <li><Link to={`${url}/payment`}><span >{paymentIcon}</span> Payment</Link></li>
                            <li> <Link to={`${url}/myOrders`}><span>{cartIcon}</span> My Orders</Link></li>
                            <li><Link to={`${url}/review`}><span>{startIcon}</span> Review</Link></li>
                        </ul>
                    }
                    <ul>
                        <li><Button onClick={handleLogOut} variant="outlined" style={{ marginTop: '25px' }} color="error"><span>{logOutIcon}</span> Log Out</Button></li>
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
                        color: '#E52727 ',
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
                    <Route exact path={path}><DashboardHome></DashboardHome></Route>
                    {admin ?
                        <div>
                            {/* Admin */}
                            <Route path={`${url}/manageAllOrders`}><ManageAllOrders></ManageAllOrders></Route>
                            <Route path={`${url}/addProduct`}><AddProduct></AddProduct></Route>
                            <Route path={`${url}/makeAdmin`}><MakeAdmin></MakeAdmin></Route>
                            <Route path={`${url}/mangeProducts`}><ManageProducts></ManageProducts></Route>
                        </div>
                        :
                        <div>
                            {/* Regular User */}
                            <Route path={`${url}/payment`}><Payment></Payment></Route>
                            <Route path={`${url}/myOrders`}><MyOrders userEmail={user.email}></MyOrders></Route>
                            <Route path={`${url}/review`}><Review></Review></Route>
                        </div>
                    }
                </Box>
            </Box>
        </div>
    );
};

export default Dashboard;