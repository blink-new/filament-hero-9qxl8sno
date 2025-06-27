import React, { createContext, useContext } from 'react';

interface UserContextType {
  name: string;
  email: string;
}

// Simulate the current user. Change this to test different users.
const defaultUser: UserContextType = {
  name: 'Test user',
  email: 'testuser@example.com',
};

const UserContext = createContext<UserContextType>(defaultUser);

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // In a real app, get user from auth provider
  return <UserContext.Provider value={defaultUser}>{children}</UserContext.Provider>;
};
