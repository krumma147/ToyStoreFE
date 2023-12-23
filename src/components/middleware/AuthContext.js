import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedToken = sessionStorage.getItem('token');
  const storedId = sessionStorage.getItem('id');
  const storedUsername = sessionStorage.getItem('username');
  const storedRole = sessionStorage.getItem('role');
const [user, setUser] = useState(() => {
  try {
    // Attempt to parse the JSON string
    return storedToken ? { token: storedToken, id: storedId, username: storedUsername, role: storedRole } : null;
  } catch (error) {
    console.error('Error parsing user data:', error);
    return {};
  }
});

useEffect(() => {
  // Validate the token on component mount
  if (user?.token) {
    // Perform validation logic, e.g., send a request to the server to verify the token
    // If the token is invalid, perform logout
    // If the token is valid, you can update the user state with additional information
    // setUser(updatedUserData);
  }
}, [user]);

const login = (token, id, username, role) => {
  // Perform authentication logic, set user data, and store in session storage
  setUser({ token });
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('id', id);
  sessionStorage.setItem('username', username);
  sessionStorage.setItem('role', role);
};
const navigate = useNavigate();
const logout = () => {
  // Perform logout logic and clear user data and JWT
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