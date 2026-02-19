import React, { useState } from 'react'
import { FaBook, FaCar, FaChartLine, FaHome, FaPlane, FaUser } from 'react-icons/fa'

const Goals = () => {
  const initialState = {
    title: "",
    amount: "",
    category: "",
    lastdate: "",
    description: ""
  }

  const [goalsData, setGoalsData] = useState(initialState)
  const { title, amount, category, lastdate, description } = goalsData

  const handleChange = (e) => {
    const { name, value } = e.target

    setGoalsData(prev => ({ ...prev, [name]: value }))
  }

  const handleGoalsData = (e) => {
    e.preventDefault()
    console.log(goalsData)
  }
  return (
    <div className="h-full overflow-y-auto px-4 sm:px-10 py-8">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-white">
          Goals
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
          Manage your name, password and account details.
        </p>
      </div>

      <form onSubmit={handleGoalsData} className="space-y-10">

        {/* Profile Photo
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl font-semibold text-gray-600 dark:text-gray-300">
            <FaUser />
          </div>

          <button
            type="button"
            className="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                       text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Upload Photo
          </button>
          <input type="file" name="" id="" />
        </div> */}

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
              Title
            </label>
            <input
              name="title"
              value={title}
              onChange={handleChange}
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl 
                        bg-gray-100 dark:bg-[#0B1220]
                        border border-gray-300 dark:border-gray-700
                        focus:ring-2 focus:ring-teal-500 
                        focus:outline-none transition"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
              Amount
            </label>
            <input
              name="amount"
              value={amount}
              onChange={handleChange}
              type="number"
              required
              className="w-full px-4 py-3 rounded-xl 
                        bg-gray-100 dark:bg-[#0B1220]
                        border border-gray-300 dark:border-gray-700
                        focus:ring-2 focus:ring-teal-500 
                        focus:outline-none transition"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
              Category
            </label>
            <select
              name="category"
              value={category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl 
                        bg-gray-100 dark:bg-[#0B1220]
                        border border-gray-300 dark:border-gray-700"
            >
              <option value="" disabled>Select category</option>
              <option><FaPlane /> Travel</option>
              <option><FaCar /> Purchase</option>
              <option>Shopping</option>
              <option><FaHome	/> Home</option>
              <option><FaChartLine	/> Investment</option>
              <option><FaBook	 /> Education</option>
              <option><FaUser />  Personal</option>
            </select>
          </div>

          {/* Last Date */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
              Last Date
            </label>
            <input
              name="lastdate"
              value={lastdate}
              onChange={handleChange}
              type="date"
              required
              className="w-full px-4 py-3 rounded-xl 
                        bg-gray-100 dark:bg-[#0B1220]
                        border border-gray-300 dark:border-gray-700
                        focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              value={description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl 
                        bg-gray-100 dark:bg-[#0B1220]
                        border border-gray-300 dark:border-gray-700"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button
            type="button"
            className="px-6 py-3 rounded-xl border
                       border-gray-300 dark:border-gray-600
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-8 py-3 rounded-xl font-semibold text-white
                       bg-teal-600 hover:bg-teal-500
                       transition duration-300 hover:scale-105 shadow-md"
          >
            Add goal
          </button>
        </div>

      </form>
    </div>
  )
}

export default Goals
