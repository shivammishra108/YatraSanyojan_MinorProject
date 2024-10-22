import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext); // Access the user from context

    // Check if user is logged in and has the role of admin
    if (!user || user.role !== 'admin') {
        alert("You can not access this Route");
        return <Navigate to="/" />; // Redirect to home if not authorized
    }

    return children; // Render the children if authorized
};

export default ProtectedRoute;
