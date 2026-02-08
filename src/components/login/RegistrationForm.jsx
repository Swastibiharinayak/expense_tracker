import { FaApple, FaArrowRight, FaGoogle } from 'react-icons/fa'

const RegistrationForm = () => {
    return (
        <div>
            <form className='w-[100%] flex flex-col gap-2'>
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder="John Doe" className='p-2 w-[95%] rounded-xl' />
                <label htmlFor="">Email</label>
                <input type="email" placeholder="you@example.com" className='p-2 w-[95%] rounded-xl' />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="•••••••••" className='p-2 w-[95%] rounded-xl' />
                <p className='text-xs text-slate-400'>Must have atleast 8 characters</p>

                {/* Remember / forgot password */}
                <div className='flex justify-between'>
                    <label htmlFor="" className='text-slate-500'><input type="checkbox" name="" id="" />I agree to the Terms of Service and Privacy Policy</label>

                </div>

                <button className='flex items-center px-40 py-5 bg-teal-500 rounded-xl text-white font-bold text-md '> Sign in <FaArrowRight /> </button>
            </form>


            <span> Or continue with </span>

            <div className='flex justify-between w-full'>
                <button className='px-14 py-2 rounded-xl flex items-center bg-white gap-2'><FaGoogle /> Google </button>
                <button className='px-14 py-2 rounded-xl bg-white flex items-center gap-2'><FaApple /> Apple</button>
            </div>
        </div>
    )
}

export default RegistrationForm
