import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashboardHome from './Pages/Dashboard/Dashboard/DashboardHome/DashboardHome';
import useAuth from './Hooks/useAuth';
import ManageAllOrders from './Pages/Dashboard/AdminSection/ManageAllOrders/ManageAllOrders';
import AddProduct from './Pages/Dashboard/AdminSection/AddProduct/AddProduct';
import MakeAdmin from './Pages/Dashboard/AdminSection/MakeAdmin/MakeAdmin';
import ManageProducts from './Pages/Dashboard/AdminSection/ManageProducts/ManageProducts';
import Payment from './Pages/Dashboard/UsersSection/Payment/Payment';
import MyOrders from './Pages/Dashboard/UsersSection/MyOrders/MyOrders';
import Review from './Pages/Dashboard/UsersSection/Review/Review';


function App() {

  const { user, admin } = useAuth();

  return (
    <div className="App text-fonts">

      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />


          <Route path="/home" element={<Home></Home>} />


          <Route path="/explore" element={<Explore></Explore>} />


          <Route path="/purchase/:product_id"
            element={
              <PrivateRoute>
                <Purchase></Purchase>
              </PrivateRoute>}
          />



          <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>

            <Route path="/dashboard" element={<DashboardHome></DashboardHome>} />
            {admin ?
              <>
                {/* Admin */}
                <Route path={`/dashboard/manageAllOrders`} element={<ManageAllOrders></ManageAllOrders>} />
                <Route path={`/dashboard/addProduct`} element={<AddProduct></AddProduct>} />
                <Route path={`/dashboard/makeAdmin`} element={<MakeAdmin></MakeAdmin>} />
                <Route path={`/dashboard/mangeProducts`} element={<ManageProducts></ManageProducts>} />
              </>
              :
              <>
                {/* Regular User */}
                <Route path={`/dashboard/payment`} element={<Payment></Payment>} />
                <Route path={`/dashboard/myOrders`} element={<MyOrders userEmail={user?.email}></MyOrders>} />
                <Route path={`/dashboard/review`} element={<Review></Review>} />
              </>
            }
          </Route>








          <Route path="/login" element={<Login></Login>} />

          <Route path="/register" element={<Register></Register>} />

          <Route path="*" element={<NotFound></NotFound>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;

// Repository link changed