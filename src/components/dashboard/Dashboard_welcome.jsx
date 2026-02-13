import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const Dashboard_welcome = () => {
  const { user } = useContext(AuthContext)

  // console.log(user)
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <h1 className='text-2xl font-bold'>{`Welcome to SpendWise ${user.name}!`}</h1>
    </div>
  )
}

export default Dashboard_welcome
