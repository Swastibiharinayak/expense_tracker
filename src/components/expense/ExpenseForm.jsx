import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import { toast } from 'react-toastify'

const ExpenseForm = () => {

  const initialState = {
    title: "",
    amount: "",
    category: "",
    date: "",
    payment_type: "",
    description: ""
  }

  const [expenseData, setExpenseData] = useState(initialState)
  const { title, amount, category, date, payment_type, description } = expenseData

  const { addNewExpense, expenses } = useContext(AuthContext)

  const handleChange = (e) => {
    const { name, value } = e.target

    setExpenseData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleExpenseData = (e) => {
    e.preventDefault()
    // console.log(expenseData)
    const response = addNewExpense(expenseData)

    if (response.success) {
      toast.success("Expense added successfully")
      setExpenseData(initialState)
    } else {
      toast.error(response.message)
    }
  }

  console.log(expenses)

  return (
    <div className="w-full h-full overflow-scroll">
      <h1 className="text-4xl font-medium mb-4">New Expense</h1>
      <hr className="border-gray-700 mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-3">
        <form onSubmit={handleExpenseData} className="md:col-span-2 grid gap-y-5 mx-auto w-full max-w-4xl">

          <div className="grid grid-cols-3 items-center gap-x-6">
            <label htmlFor='title' className="text-sm text-gray-400 text-right">Title</label>
            <input
              id='title'
              name='title'
              value={title}
              onChange={handleChange}
              type="text"
              className="col-span-2 bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-x-6">
            <label htmlFor='amount' className="text-sm text-gray-400 text-right">Amount</label>
            <input
              id='amount'
              name='amount'
              value={amount}
              onChange={handleChange}
              type="number"
              className="col-span-2 bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-x-6">
            <label htmlFor='category' className="text-sm text-gray-400 text-right">Category</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={handleChange}
              className="col-span-2 bg-gray-800 border border-gray-700 rounded-md px-4 py-2"
            >
              <option value="" disabled>Select one</option>
              <option>Fashion</option>
              <option>Food</option>
              <option>Grocery</option>
              <option>Travel</option>
              <option>Miscellaneous</option>
            </select>
          </div>

          <div className="grid grid-cols-3 items-center gap-x-6">
            <label htmlFor='date' className="text-sm text-gray-400 text-right">Date</label>
            <input
              id='date'
              name='date'
              value={date}
              onChange={handleChange}
              type="date"
              className="col-span-2 bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-x-6">
            <label htmlFor='payment_type' className="text-sm text-gray-400 text-right">Payment type</label>
            <select
              id="payment_type"
              name="payment_type"
              value={payment_type}
              onChange={handleChange}
              className="col-span-2 bg-gray-800 border border-gray-700 rounded-md px-4 py-2"
            >
              <option value="" disabled>Select one</option>
              <option>UPI</option>
              <option>Cash</option>
              <option>Credit card</option>
            </select>
          </div>

          <div className="grid grid-cols-3 items-start gap-x-6">
            <label htmlFor='description' className="text-sm text-gray-400 text-right pt-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleChange}
              rows={5}
              className="col-span-2 bg-gray-800 border border-gray-700 rounded-md px-4 py-2"
            ></textarea>
          </div>

          <div className="grid grid-cols-3">
            <div></div>
            <div className="col-span-2 flex justify-end gap-4 pt-4">
              <button className="px-6 py-2 bg-gray-700 rounded-md hover:bg-gray-600">
                Save
              </button>
              <button className="px-6 py-2 bg-gray-700 rounded-md hover:bg-gray-600">
                Delete
              </button>
            </div>
          </div>

        </form>
      </div>

    </div>
  )
}

export default ExpenseForm