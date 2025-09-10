import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const AuthContext = createContext();

// AuthProvider using hooks
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser({ email: storedUser });
    }
  }, []);

  // Login function
  const login = (email) => {
    setUser({ email });
    localStorage.setItem("user", email);
    // Navigate will be handled by the consumer
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    // Navigate will be handled by the consumer
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for easy access
export const useAuth = () => {
  return useContext(AuthContext);
};
