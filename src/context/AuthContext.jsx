import React, { createContext, useState } from 'react'
import { userRegister } from '../apis';



const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const register = ({name, email, password}) => {
      // console.log("Context",name, email,password)
      userRegister({name, email, password})
    }
    const login = () => {
        
    }
    const logout = () => {

    }
    
  return (
    <AuthContext.Provider value={{ user ,register , login, logout }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
