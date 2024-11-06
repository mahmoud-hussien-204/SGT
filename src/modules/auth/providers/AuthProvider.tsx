import { createContext, useState } from "react";

import AuthHelper from "../helpers/AuthHelper";

interface IAuthContext {
  isLoggedIn: boolean;
  userData: null | IUser;
  saveUser: (user: IUser) => void;
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  userData: null,
  saveUser: () => {},
});

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(AuthHelper.userIsLoggedIn());

  const [userData, setUserData] = useState<IUser | null>(
    AuthHelper.getUserData()
  );

  const saveUser = (user: IUser) => {
    AuthHelper.setUserData(user);
    AuthHelper.setUserIsLoggedIn(true);
    setUserData(user);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, saveUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
