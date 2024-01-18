import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
  if (!user.token) {
    try {
      const storedData = JSON.parse(sessionStorage.getItem('user'));
      // const storedId = sessionStorage.getItem('id');
      // const storedUsername = sessionStorage.getItem('username');
      // const storedRole = sessionStorage.getItem('role');
      if (storedData.token && storedData.id && storedData.username && storedData.role) {
        setUser({ token: storedData.token, id: storedData.id, username: storedData.username, role: storedData.role });
      }
    } catch (error) {
      console.error('Error parsing user data:', error);
    }
  }
}, [user, setUser]);

const login = (token, id, username, role) => {
  const data = {
    token: token,
    id: id,
    username: username,
    role: role
  }
  setUser({ data });
  sessionStorage.setItem('user', JSON.stringify(data));
  // sessionStorage.setItem('id', id);
  // sessionStorage.setItem('username', username);
  // sessionStorage.setItem('role', role);
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