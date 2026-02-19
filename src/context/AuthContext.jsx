import React, { createContext, useEffect, useState } from 'react'
import { addExpense, checkLogin, deleteExpense, fetchExpenses, updateExpense, userLogin, userLogout, userRegister, userUpdate } from '../apis';


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)
  const [expenses, setExpenses] = useState([])
  const [doEdit, setDoEdit] = useState(null)
  const [isLogin, setIsLogin] = useState(true) // For login or signup form show

  // Register handle
  const register = ({ name, email, password }) => {
    const isRegistered = userRegister({ name, email, password })

    if (isRegistered) {
      return { success: true,message: "User registered successfully 🎉" }
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

  // Logout
  const logout = () => {
    setUser(null)
    userLogout()
  }

  // Update Profile
  const update = (profileData) => {
    const response = userUpdate(profileData)
    if (response) {
      return { success: true,message: "Profile updated successfully" }
    } else {
      return { success: false, message: "Failed to update" }
    }
  }

  // Add new expense fucntion
  const addNewExpense = (expenseData) => {
    const response = addExpense(expenseData)
    // console.log(response)
    if (response.success) {
      fetchAllExpenses()
      // return { success: true }
    }

    return response
  }


  // Fetch all expenses
  const fetchAllExpenses = () => {
    const data = fetchExpenses()
    setExpenses(data)
  }


  // Delete expense
  const removeExpense = (id) => {
    const response = deleteExpense(id)

    if (response.success) {
      fetchAllExpenses()
    }

    return response
  }


  // Edit expenses
  const editExpense = (expenseData) => {
    const response = updateExpense(expenseData)

    if (response.success) {
      const updatedExpenses = fetchExpenses()
      setExpenses(updatedExpenses)
    }

    return response
  }


  // useEffect for stay logged in still after refresh
  useEffect(() => {
    const storedUser = checkLogin()
    // console.log("Stored user:", storedToken)

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

    setLoading(false)
  }, [])

  // useEffect for refreshing fetchAllExpenses
  useEffect(() => {
    if (user) {
      fetchAllExpenses()
    }
  }, [user])

  // console.log(user)
  return (
    <AuthContext.Provider value={{ user, register, login, logout, update, addNewExpense, removeExpense, expenses, editExpense, doEdit, setDoEdit, isLogin, setIsLogin, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
