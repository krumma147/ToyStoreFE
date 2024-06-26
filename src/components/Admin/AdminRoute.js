import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from '../middleware/PrivateAuth';
import Index from './index';

const AdminRoute = () => {

    return (
        <Routes>
            <Route
                path="/"
                element={<PrivateRoute element={<Index />} roles={['admin']} />}
            />
        </Routes>
      );
}

export default AdminRoute;