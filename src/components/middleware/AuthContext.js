import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedToken = sessionStorage.getItem('token');
  const storedId = sessionStorage.getItem('id');
  const storedUsername = sessionStorage.getItem('username');
  const storedRole = sessionStorage.getItem('role');
  const [user, setUser] = useState({});
useEffect(() => {
  if (!user?.token) {
    setUser(() => {
      try {
        return storedToken ? { token: storedToken, id: storedId, username: storedUsername, role: storedRole } : null;
      } catch (error) {
        console.error('Error parsing user data:', error);
        return {};
      }
    });
  }
}, [user]);

const login = (token, id, username, role) => {
  setUser({ token });
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('id', id);
  sessionStorage.setItem('username', username);
  sessionStorage.setItem('role', role);
};
const navigate = useNavigate();

const logout = () => {
  setUser({});
  sessionStorage.clear();
  navigate('/login');
};

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};