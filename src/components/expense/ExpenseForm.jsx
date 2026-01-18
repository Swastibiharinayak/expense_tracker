import React from 'react'

const ExpenseForm = () => {
  return (
    <div className='w-full min-h-scree  p-8'>
  <h1 className='text-4xl font-medium mb-4'>New Expense</h1>
  <hr className="border-gray-700 mb-8"/>

  <div className="grid grid-cols-1 md:grid-cols-3">
    <form className="md:col-span-2 grid gap-y-5">

      <div className="grid grid-cols-3 items-center gap-x-6">
        <label className="text-sm text-gray-400 text-right">Title</label>
        <input
          type="text"
          className="col-span-2 bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div className="grid grid-cols-3 items-center gap-x-6">
        <label className="text-sm text-gray-400 text-right">Amount</label>
        <input
          type="number"
          className="col-span-2 bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div className="grid grid-cols-3 items-center gap-x-6">
        <label className="text-sm text-gray-400 text-right">Catagory</label>
        <select className="col-span-2 bg-gray-800 border border-gray-700 rounded-md px-4 py-2">
          <option disabled selected>Select one</option>
          <option>Fashion</option>
          <option>Food</option>
          <option>Grocery</option>
          <option>Travel</option>
          <option>Miscellaneous</option>
        </select>
      </div>

      <div className="grid grid-cols-3 items-center gap-x-6">
        <label className="text-sm text-gray-400 text-right">Date</label>
        <input
          type="date"
          className="col-span-2 bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div className="grid grid-cols-3 items-center gap-x-6">
        <label className="text-sm text-gray-400 text-right">Payment type</label>
        <select className="col-span-2 bg-gray-800 border border-gray-700 rounded-md px-4 py-2">
          <option disabled selected>Select one</option>
          <option>UPI</option>
          <option>Cash</option>
          <option>Credit card</option>
        </select>
      </div>

      <div className="grid grid-cols-3 items-start gap-x-6">
        <label className="text-sm text-gray-400 text-right pt-2">
          Description
        </label>
        <textarea
          rows={5}
          className="col-span-2 bg-gray-800 border border-gray-700 rounded-md px-4 py-2"
        ></textarea>
      </div>

      <div className="grid grid-cols-3">
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