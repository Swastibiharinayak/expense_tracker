import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const Overview = () => {
  const { expenses, removeExpense } = useContext(AuthContext)

  return (
    <div className="mt-6">
      <h2 className="text-2xl mb-4">All Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <div className="space-y-4">
          {expenses.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg flex justify-between"
            >
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.category}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold">₹{item.amount}</p>
                <p className="text-xs">{item.payment_type}</p>
                <button
                  onClick={() => removeExpense(item.id)}
                  className="text-red-400 text-sm mt-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Overview
