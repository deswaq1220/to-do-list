/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
type AuthContextValue = {
  isLoggedIn: boolean;
  login: () => void;
}
const initialValue: AuthContextValue = {
  isLoggedIn: false,
  login: () => { },
}
const AuthContext = createContext(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => setIsLoggedIn(true)
  const value: AuthContextValue = { isLoggedIn, login }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}