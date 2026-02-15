import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/AuthContext'

const Dashboard_welcome = () => {
  const { user } = useContext(AuthContext)
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // console.log(user)
  return (
    <div className='flex flex-col gap-4 items-center justify-center w-full h-full'>
      {user && <h1 className='text-2xl font-bold'>{`Welcome to SpendWise ${user.name}!`}</h1>}
      <p className='text-2xl font-bold'>{currentTime.toLocaleString()}</p>
    </div>
  )
}

export default Dashboard_welcome
