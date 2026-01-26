import React from 'react'

const Welcome = () => {
  return (
    <div className='bg-white dark:bg-black text-black dark:text-gray-200'>
      Welcome to SpendWise

      <div id="home" className='w-screen h-screen bg-yellow-400'>
        <h1>Home</h1>
        <h1>Preview</h1>
        <h1>Features</h1>
        <h1>How it works</h1>
      </div>
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
