import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const ManageAllOrders = () => {

    // Firebase
    const { user } = useAuth();


    // Reload on Update or Delete
    const [reload, setReload] = useState(false);

    // Store Data
    const [allOrders, setOrders] = useState([]);

    // Get All orders
    useEffect(() => {
        fetch(`https://pure-badlands-75944.herokuapp.com/allOrders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [reload]);


    // Handle Delete Order
    const handleOrderDelete = orderId => {
        setReload(false)
        const proceed = window.confirm('Are you sure you want to Delete?');
        if (proceed) {
            fetch(`https://pure-badlands-75944.herokuapp.com/deleteOrder/${orderId}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setReload(true);
                    }
                })
        }
    };

    // Handle Update Order status
    const handleUpadateStatus = orderID => {
        setReload(false)
        fetch(`https://pure-badlands-75944.herokuapp.com/updateOrder/${orderID}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setReload(true);
                }
            })
    };


    // Font Awesome
    const deleteIcon = <FontAwesomeIcon icon={faTrash} />
    const checkMark = <FontAwesomeIcon icon={faCheckSquare} />

    return (
        <div style={{ fontFamily: 'roboto' }}>
            <h2 style={{ color: 'black', margin: '20px 0' }}>Manage Orders</h2>
            <br />

            <TableContainer style={{ border: '1px solid lightgray', padding: '10px 0' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><span>User Name</span></TableCell>
                            <TableCell><span>Email</span></TableCell>
                            <TableCell><span>Number</span></TableCell>
                            <TableCell><span>Status</span></TableCell>
                            <TableCell><span>Ship Order</span></TableCell>
                            <TableCell><span>Delete</span></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allOrders.map((singleOrder) =>
                            <TableRow
                                key={singleOrder._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell><span>{singleOrder.name}</span></TableCell>
                                <TableCell><span>{singleOrder.email}</span></TableCell>
                                <TableCell><span>{singleOrder.number}</span></TableCell>
                                <TableCell><span className={`${singleOrder?.cart?.status === 'pending' ? "text-warning" : "text-success"}`}>{singleOrder?.cart?.status}</span></TableCell>
                                <TableCell><span><Button onClick={() => { handleUpadateStatus(singleOrder._id) }} variant="text" sx={{ fontSize: 24 }}>{checkMark}</Button></span></TableCell>
                                <TableCell ><span><Button onClick={() => { handleOrderDelete(singleOrder._id) }} variant="text" color="error" sx={{ fontSize: 20 }}>{deleteIcon}</Button></span></TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default ManageAllOrders;


/*

<TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>

*/