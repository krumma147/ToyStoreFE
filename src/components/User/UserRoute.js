import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useAuth } from '../middleware/auth';
import { PrivateRoute } from '../middleware/PrivateAuth';
import AddUser from '../User/AddUser';
import UserList from '../User/UserList';

const UserRoute = () => {

    return (
        <Routes>
          <Route
                path="/add"
                element={<PrivateRoute element={<AddUser />} roles={['admin']} />}
            />
            <Route exact path="/edit/:id" element={<AddUser />} />
            <Route
            path="/"
            element={<PrivateRoute element={<UserList />} roles={['admin']} />}
            />
        </Routes>
      );
}

export default UserRoute;