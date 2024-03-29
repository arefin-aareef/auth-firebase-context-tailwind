// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext)

    if(loading) {
        return <progress className="progress w-56"></progress>
    }

    if(user) {
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;