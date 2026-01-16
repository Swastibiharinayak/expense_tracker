import React from 'react'

const ExpenseForm = () => {
  return (
    <div className='bg-orange-700 w-screen h-screen'>
        <form>
          <label htmlFor="">Title</label>
          <input type="text" />

          <label htmlFor="">Amount</label>
          <input type="number" />

          <label htmlFor="">Catagory</label>
          <select name="" id="">
            <option value="">Fashion</option>
            <option value="">Food</option>
            <option value="">Grocery</option>
            <option value="">Travel</option>
            <option value="">Miscellaneous</option>
          </select>

          <label htmlFor="">Date</label>
          <input type="date" name="" id="" />
        </form>
    </div>
  )
}

export default ExpenseForm