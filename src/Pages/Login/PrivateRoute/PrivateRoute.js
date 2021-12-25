import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children }) => {

    // Firebase
    const { user, isLoading } = useAuth();
    const location = useLocation();
    // handle redirect on Page reload
    if (isLoading) {
        return (
            <div className="mt-5 pt-5 fs-1"><Spinner animation="border" variant="danger" /> </div>
        );
    }

    if (user?.email) { return children }

    // Redirect
    return <Navigate to="/login" state={{ from: location }} />


};

export default PrivateRoute;