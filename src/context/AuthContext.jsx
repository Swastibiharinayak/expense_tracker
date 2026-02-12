import React, { createContext, useState } from 'react'
import { userLogin, userRegister } from '../apis';
import Dashboard from '../components/dashboard/Dashboard';
import { useNavigate } from 'react-router-dom';



const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const register = ({name, email, password}) => {
      // console.log("Context",name, email,password)
      const isRegistered = userRegister({name, email, password})
      if (isRegistered) {
        alert("User registered successfully")
      } else {
        setError("Email already exists")
      }
    }

    const login = ({email , password}) => {
      const isLoggedin = userLogin({ email, password})
        // console.log("context",email , password)
      if (isLoggedin) {
        alert("User logged in successfully")
      } else {
        setError("Email or Password is Incorrect")
      }
    }

    const logout = () => {

    }
    
  return (
    <AuthContext.Provider value={{ user ,error ,register , login, logout }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
