import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
import { BrowserRouter, Routes, Route, useNavigate, Navigate   } from 'react-router-dom';
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

//Style 
import { GlobalStyle } from './GlobalStyles';
//Auth

import { AuthProvider, useAuth } from './components/middleware/AuthContext';

const PrivateRoute = ({ element, roles }) => {
  const { user } = useAuth();

  if (!user) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/login" />;
  }

  // Check if the user has the required role
  if (roles && !roles.includes(user.role)) {
    // Redirect to a forbidden page or handle unauthorized access
    return <Navigate to="/forbidden" />;
  }

  // Render the provided element if the user is authenticated and has the required role
  return React.cloneElement(element, {});
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <AuthProvider>
          <Routes>
              <Route exact path="/" element={<Home /> } />
              <Route path="/about" element={<About /> } />
              <Route exact path="/users/:userId" element={<UserProfile />} />
              <Route exact path="/users/edit/:id" element={<AddUser />} />
              <Route exact path="/users/add" element={<AddUser />} />
              <Route exact path="/users" element={<UserList />} />
              <Route exact path="/categories" element={<CategoriesList />} />
              <Route exact path="/branches" element={<BranchList />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route path="/toys/*" element={<Toy />} />
              <Route path="/cart" element={<Cart />} />
              {/* <Route exact path="/toys" element={<ToyList />} />
              <Route path="/toys/:id" element={<ToyDetail />} />
              <Route exact path="/shop" element={<Shop />} /> */}
              <Route path="*" element={<NotFound />} />

              <Route
                  path="/users/add"
                  element={<PrivateRoute element={<AddUser />} roles={['admin']} />}
              />

              <Route
              path="/users"
              element={<PrivateRoute element={<UserList />} roles={['admin']} />}
              />
          </Routes>
          <GlobalStyle />
          
          </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

