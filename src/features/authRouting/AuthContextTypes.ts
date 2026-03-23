import { createContext } from 'react';

export interface User {
  _id: string;
  email: string;
  name: string;
  about: string;
  phone: string;
  avatarPath: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, userData: User) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);