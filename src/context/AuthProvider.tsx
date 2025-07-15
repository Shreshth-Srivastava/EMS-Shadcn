import React,{useEffect, createContext, useState, type PropsWithChildren} from 'react'
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';

interface AuthContextType {
  employees: [];
  admin: [];
}

export const AuthContext = createContext<AuthContextType | null>(null);

// localStorage.clear();
// setLocalStorage();

const AuthProvider = ({children}: PropsWithChildren) => {
  const [userData, setUserData] = useState<AuthContextType | null>(null);

  useEffect(() => {
    // setLocalStorage();
    // const loggedInUser = {role: "anonymous", data: null};
    // localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }
    
    if (!localStorage.getItem("loggedInUser")) {
      const loggedInUser = { role: "anonymous", data: null };
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    }

    const {employees, admin} = getLocalStorage();
    setUserData({employees, admin});
  }, [])

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider