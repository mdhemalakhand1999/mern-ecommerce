import React from 'react';
import { Navigate, Route } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const token = window.localStorage.getItem('token'); 
    if(!token) {
        return <Navigate to="/signin" replace />;
    } else {
        return children;
    }
};

export default PrivateRoute;