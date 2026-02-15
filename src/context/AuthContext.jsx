import React, { createContext, useEffect, useState } from 'react'
import { checkLogin, userLogin, userLogout, userRegister } from '../apis';


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([])
  // const [error, setError] = useState(null)

  // Register handle
  const register = ({ name, email, password }) => {
    const isRegistered = userRegister({ name, email, password })

    if (isRegistered) {
      return { success: true }
    } else {
      return { success: false, message: "Email already exists" }
    }
  }

  // Login Handle
  const login = ({ email, password }) => {
    const response = userLogin({ email, password })

    if (response.success) {
      setUser(response.user)
      localStorage.setItem("currentUser", JSON.stringify(response.user))
      return {
        success: true,
        message: "Login successful"
      }
    }

    return {
      success: false,
      message: response.message
    }
  }

  const logout = () => {
    setUser(null)
    userLogout()
  }

  useEffect(() => {
  const storedUser = checkLogin()
  // console.log("Stored user:", storedUser)

  if (storedUser) {
    const parsed = JSON.parse(storedUser)
    // console.log("Parsed user:", parsed)
    if (parsed) { 
      setUser(parsed)
    }
  }
}, [])


  // console.log(user)

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("currentUser")

  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser))
  //   }
  // }, [])


  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
