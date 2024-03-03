import { useCallback } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { Photographer } from '../../api/photographer';
import { useEffect } from 'react';
import { customFetch } from '../../helper/customFetch';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {

    (async () => {

      const checked = await customFetch({
        path: "/check",
        token: localStorage.getItem('token'),
      });

      if (checked?.ok) {
        setIsAuth(prev => true);
      }

    })()

  }, [])


  const register = async (data) => {

    const photographer = new Photographer();
    const r = await photographer.register(data);

    if (r.ok) {
      localStorage.setItem('token', r.token);
      setIsAuth(prev => true);
      return;
    }

    setIsAuth(prev => false);
  }

  const login = async (data) => {

    const photographer = new Photographer();
    const r = await photographer.login(data);

    if (r.ok) {
      localStorage.setItem('token', r.token);
      setIsAuth(prev => true);
      return;
    }

    setIsAuth(prev => false);

    return r;
  }

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuth(prev => false);
  }

  const valueContext = {
    isAuth,
    login,
    logout,
    register
  }

  return (
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;