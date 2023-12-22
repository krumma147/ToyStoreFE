import React from 'react';
//Router
import { BrowserRouter, Routes, Route, Navigate, HashRouter   } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import UserList from './components/User/UserList';
import CategoriesList from './components/Category/CategoryList';
import UserProfile from './components/User/UserProfile';
import AddUser from './components/User/AddUser';
import BranchList from './components/Branch/BranchList';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Toy from "./components/Toy/Toy";
import Cart from "./components/Cart";
import Order from './components/Shop/Order';
import User from "./components/User/UserRoute";
import AdminRoute from './components/Admin/AdminRoute'
//Style 
import { GlobalStyle } from './GlobalStyles';
//Auth

import { AuthProvider, useAuth } from './components/middleware/AuthContext';
import { PrivateRoute } from './components/middleware/PrivateAuth';
const App = () => (
    <BrowserRouter>
        <AuthProvider>
        <Routes>
            <Route exact path="/" element={<Home /> } />
            <Route path="/about" element={<About /> } />
            <Route exact path="/users/:userId" element={<UserProfile />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="/toys/*" element={<Toy />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Order />} />
            {/* <Route exact path="/toys" element={<ToyList />} />
            <Route path="/toys/:id" element={<ToyDetail />} />
            <Route exact path="/shop" element={<Shop />} /> */}
            <Route path="/users/*" element={<PrivateRoute element={<User />} roles={['admin']} />} />
            <Route path="/admin/*" element={<PrivateRoute element={<AdminRoute />} roles={['admin']} />} />
            <Route path="*" element={<NotFound />} />
            
            <Route exact path="/categories" element={<PrivateRoute element={<CategoriesList />} roles={['admin']} />} />
            <Route exact path="/branches" element={<PrivateRoute element={<BranchList />} roles={['admin']} />} />
        </Routes>
        <GlobalStyle />
        
        </AuthProvider>
  </BrowserRouter>
)

export default App;
