import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    // Firebase
    const { user, isLoading } = useAuth();

    // handle redirect on Page reload
    if (isLoading) {
        return (
            <div className="mt-5 pt-5 fs-1"><Spinner animation="border" variant="danger" /> </div>
        );
    }

    // Redirect
    return (
        <Route
            {...rest}
            render={({ location }) => user.email
                ?
                children
                :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                />
            }
        >
        </Route>
    );
};

export default PrivateRoute;