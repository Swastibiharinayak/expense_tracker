import React from 'react'
import Features from './Features'

const Welcome = () => {
  return (
    <div className='bg-white dark:bg-black text-black dark:text-gray-200'>
      <div className='w-screen h-screen bg-gradient-to-br from-teal-700 to-teal-300 flex'>
            <div className="left w-[50%] h-full p-4 flex flex-col justify-around items-start">
                <span className='rounded-3xl bg-blue-600 px-2 py-4 text-xl'>Smart financial management</span>

                <h1 className='text-transform: capitalize text-7xl font-semibold text-white'>Master your money, <span className='text-teal-500'>Achieve your goals</span></h1>

                <p className='text-white text-2xl'>Track expenses, get personalized savings suggestions and invest smarter. Let AI guide you to financial freedom based on your salary and lifestyle.</p>

                <div className='flex gap-4'>
                    <button className="px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-teal-700 to-teal-300 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg">Start Free Today</button>
                    <button className="px-4 py-2 rounded-lg bg-transparent border outline-white font-bold hover:backdrop-blur-lg transition-all duration-300 ease-out hover:scale-105">Watch Demo</button>
                </div>

                <div className='flex gap-5 text-2xl'>
                    <div>
                        <h3>50K+</h3>
                        <p>Active Users</p>
                    </div>
                    <div>
                        <h3>$2.5M</h3>
                        <p>Money saved</p>
                    </div>
                    <div>
                        <h3>4.9</h3>
                        <p>Users rating</p>
                    </div>

                </div>


            </div>
            <div className="right w-[50%] h-full bg-red-300">

            </div>
        </div>
        
      {/* <div id="home" className='w-screen h-screen bg-yellow-400'>
        <h1>Home</h1>
        <h1>Preview</h1>
        <h1>Features</h1>
        <h1>How it works</h1>
      </div> */}
      <Features/>

      <div id="about" className='w-screen h-screen bg-pink-400'>
        <h1>About</h1>
        <h1>How its different</h1>
        <h1>Vision</h1>
        <h1>About Me</h1>
      </div>
      <div id="contact" className='w-screen h-screen bg-teal-400'>
        <h1>Contact Info</h1>
      </div>
    </div>
  )
}

export default Welcome
