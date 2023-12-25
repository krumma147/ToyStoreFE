import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element, roles }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    if (!user?.token) {
      navigate('/login');
      return;
    }
  
    if (roles && !roles.includes(user.role)) {
      // Alert the user and redirect to the home page
      alert('You do not have authorization to access this page.');
      navigate('/');
      return;
    }
  
    return React.cloneElement(element, {});
  };

export {PrivateRoute}