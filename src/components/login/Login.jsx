import React from 'react'
import { FaApple, FaArrowRight, FaGoogle } from 'react-icons/fa'

const Login = () => {
  return (
    <div className='bg-gradient-to-b from-[#0E1A2D] to-[#0B1220] h-screen w-screen pt-24 flex items-center justify-center'>
      
        {/* Main div */}
        <div className='max-w-md bg-slate-300 rounded-3xl flex flex-col items-center p-8 gap-3'>
            <h2 className='text-2xl font-semibold'>Welcome Back</h2>
            <p>Sign in to your account or create a new one</p>
            <div className='flex bg-slate-100 gap-5 p-1 rounded-lg'>
                <button className='px-16 bg-white'>Login</button>
                <button className='px-16'>Sign Up</button>
            </div>

            {/* Login form */}
            <form className='w-[100%] flex flex-col gap-2'>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="you@example.com" className='p-2 w-[95%] rounded-xl' />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="•••••••••" className='p-2 w-[95%] rounded-xl' />

                {/* Remember / forgot password */}
                <div className='flex justify-between'>
                    <label htmlFor="" className='text-slate-500'><input type="checkbox" name="" id="" /> Remember me</label>
                    
                    <a className='no-underline font-semibold text-teal-600'>Forgot password?</a>
                </div>

                <button className='flex items-center px-40 py-5 bg-teal-500 rounded-xl text-white font-bold text-md '> Sign in <FaArrowRight /> </button>
            </form>
            

            <span> Or continue with </span>

            <div className='flex justify-between w-full'>
                <button className='px-14 py-2 rounded-xl flex items-center bg-white gap-2'><FaGoogle /> Google </button>
            <button className='px-14 py-2 rounded-xl bg-white flex items-center gap-2'><FaApple /> Apple</button>
            </div>
        </div>
    </div>
  )
}

export default Login
