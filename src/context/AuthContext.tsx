import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
}

type IAuthContext = {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
  userName: string;
  setUserName: (name: string) => void;
}

const initialValue = {
  authenticated: false,
  setAuthenticated: () => {},
  userName: '',
  setUserName: () => {}
}

export const AuthContext = createContext<IAuthContext>(initialValue);

const getInitialState = () => {
  const storedAuth = localStorage.getItem('authenticated');
  const storedUserName = localStorage.getItem('userName');
  return {
    authenticated: storedAuth ? JSON.parse(storedAuth) : initialValue.authenticated,
    userName: storedUserName || initialValue.userName
  };
};

const AuthProvider = (props: Props) => {
  const [state, setState] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem('authenticated', JSON.stringify(state.authenticated));
    localStorage.setItem('userName', state.userName);
  }, [state]);

  const setAuthenticated = (newState: boolean) => {
    setState((prev) => ({ ...prev, authenticated: newState }));
  };

  const setUserName = (name: string) => {
    setState((prev) => ({ ...prev, userName: name }));
  };

  return (
    <AuthContext.Provider value={{ ...state, setAuthenticated, setUserName }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
