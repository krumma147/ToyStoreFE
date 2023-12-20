import { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Check if there is user data in session storage on page load
  const storedUser = sessionStorage.getItem('user');
  const [user, setUser] = useState(() => {
    try {
      // Attempt to parse the JSON string
      return storedUser ? JSON.parse(storedUser) : {};
    } catch (error) {
      console.error('Error parsing user data:', error);
      return {};
    }
  });

  const login = (userData) => {
    // Perform authentication logic, set user data, and store in session storage
    setUser(userData);
    sessionStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    // Perform logout logic and clear user data and JWT
    setUser({});
    sessionStorage.removeItem('user');
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