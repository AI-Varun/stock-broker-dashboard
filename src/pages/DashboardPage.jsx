import React from 'react';
import { Navigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import { isAuthenticated } from '../services/authService';

const DashboardPage = () => {
    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }

    return <Dashboard />;
};

export default DashboardPage;
