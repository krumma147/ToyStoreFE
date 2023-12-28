import React from 'react';
//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import UserProfile from './components/User/UserProfile';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Toy from "./components/Toy/Toy";
import Cart from "./components/Cart";
import UserOrder from "./components/Order/UserOrder";
import User from "./components/User/UserRoute";
import AdminRoute from './components/Admin/AdminRoute'
import { AuthProvider } from './components/middleware/AuthContext';
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
            <Route path="/orders" element={<PrivateRoute element={<UserOrder />} roles={['admin', 'user']} />} />
            <Route path="/users/*" element={<PrivateRoute element={<User />} roles={['admin']} />} />
            <Route path="/admin/*" element={<PrivateRoute element={<AdminRoute />} roles={['admin']} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        
        </AuthProvider>
  </BrowserRouter>
)

export default App;
