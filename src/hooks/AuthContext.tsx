import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string,
  password: string,
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextData {
  user: User;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@AreaDeRisco:token');
    const user = localStorage.getItem('@AreaDeRisco:user');

    if (token && user) {
      return { token, user: JSON.parse(user) as User };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({email, password}) => {
    try {
      const res = await api.post('login', {
        email,
        password,
      });

      const { token, user } = res.data;

      localStorage.setItem('@AreaDeRisco:token', token);
      localStorage.setItem('@AreaDeRisco:user', JSON.stringify(user));

      setData({ token, user });
    } catch (e) {
      alert('Failed on data validation');
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@AreaDeRisco:token');
    localStorage.removeItem('@AreaDeRisco:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, token: data.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
