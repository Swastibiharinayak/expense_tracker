import React, { createContext, useEffect, useState } from 'react'
import { userLogin, userRegister } from '../apis';


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const register = ({ name, email, password }) => {
    // console.log("Context",name, email,password)
    const isRegistered = userRegister({ name, email, password })
    if (isRegistered) {
      alert("User registered successfully")
    } else {
      setError("Email already exists")
    }
  }

  const login = ({ email, password }) => {
    const isLoggedin = userLogin({ email, password })
    // console.log("context",email , password)
    if (isLoggedin) {
      setUser(isLoggedin)
      localStorage.setItem("currentUser", JSON.stringify(isLoggedin))
      alert("User logged in successfully")
    } else {
      setError("Email or Password is Incorrect")
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("currentUser")
  }

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
