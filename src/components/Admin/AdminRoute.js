import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useAuth } from '../middleware/auth';
import { PrivateRoute } from '../middleware/PrivateAuth';
import AddUser from '../User/AddUser';
import UserList from '../User/UserList';
import Index from './index';

const AdminRoute = () => {

    return (
        <Routes>
          {/* <Route
                path="/add"
                element={<PrivateRoute element={<AddUser />} roles={['admin']} />}
            /> */}
            <Route
            path="/"
            element={<PrivateRoute element={<Index />} roles={['admin']} />}
            />
        </Routes>
      );
}

export default AdminRoute;