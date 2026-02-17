import React, { createContext, useEffect, useState } from 'react'
import { addExpense, checkLogin, deleteExpense, fetchExpenses, updateExpense, userLogin, userLogout, userRegister } from '../apis';


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([])
  // const [error, setError] = useState(null)
  const [expenses, setExpenses] = useState([])
  const [doEdit, setDoEdit] = useState(null)


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
    // console.log("Stored user:", storedUser)

    if (storedUser) {
      const parsed = JSON.parse(storedUser)
      // console.log("Parsed user:", parsed)
      if (parsed) {
        setUser(parsed)
      }
    }
  }, [])

  // useEffect for refreshing fetchAllExpenses
  useEffect(() => {
    if (user) {
      fetchAllExpenses()
    }
  }, [user])

  // console.log(user)
  return (
    <AuthContext.Provider value={{ user, register, login, logout, addNewExpense, removeExpense, expenses, editExpense, doEdit, setDoEdit }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
