import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='overflow-x-hidden '>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Root
