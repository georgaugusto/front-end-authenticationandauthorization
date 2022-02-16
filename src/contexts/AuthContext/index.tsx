/*eslint-disable no-console */
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

interface UserProps {
  email: string;
  permissions: string[];
  roles: string[];
}

interface SignInCredentialsProps {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentialsProps): Promise<void>;
  user: UserProps | undefined;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

const authChannel = new BroadcastChannel('auth');

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const navigate = useNavigate();

  const isAuthenticated = !!user;

  useEffect(() => {
    authChannel.onmessage = message => {
      switch (message.data) {
        case 'signOut':
          window.localStorage.clear();
          setUser(undefined);

          authChannel.postMessage('signOut');

          navigate('/', { replace: true });
          break;
        default:
          break;
      }
    };
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem('reactauth.token');

    if (token) {
      api
        .get('/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          const { email, permissions, roles } = response.data;
          setUser({ email, permissions, roles });
        })
        .catch(() => {
          window.localStorage.clear();
          setUser(undefined);

          navigate('/', { replace: true });
        });
    }
  }, [navigate]);

  async function signIn({ email, password }: SignInCredentialsProps) {
    try {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { token, refreshToken, permissions, roles } = response.data;

      localStorage.setItem('reactauth.token', token);
      localStorage.setItem('reactauth.refreshToken', refreshToken);

      setUser({
        email,
        permissions,
        roles,
      });

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      navigate('/dashboard', { replace: true });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
