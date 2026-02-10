import { FaApple, FaArrowRight, FaGoogle, FaUser, FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const SignupForm = () => {
  return (
    <div className="w-full flex flex-col gap-6">

      <form className="flex flex-col gap-4">

        {/* Full Name */}
        <label className="text-sm font-medium">Full Name</label>
        <div className="flex items-center justify-between rounded-xl px-4 py-3 focus-within:border-2 focus-within:border-teal-500 focus-within:shadow-md focus-within:shadow-blue-300/40 gap-2">
          <FaUser className="text-slate-400" />
          <input
            type="text"
            placeholder="John Doe"
            className="flex-1 outline-none bg-transparent"
          />
        </div>

        {/* Email */}
        <label className="text-sm font-medium">Email</label>
        <div className="flex items-center justify-between rounded-xl px-4 py-3 focus-within:border-2 focus-within:border-teal-500 focus-within:shadow-md focus-within:shadow-blue-300/40 gap-2">
          <MdEmail className="text-slate-400" />
          <input
            type="email"
            placeholder="you@example.com"
            className="flex-1 outline-none bg-transparent"
          />
        </div>

        {/* Password */}
        <label className="text-sm font-medium">Password</label>
        <div className="flex items-center justify-between rounded-xl px-4 py-3 focus-within:border-2 focus-within:border-teal-500 focus-within:shadow-md focus-within:shadow-blue-300/40 gap-2">
          <FaLock className="text-slate-400" />
          <input
            type="password"
            placeholder="••••••••"
            className="flex-1 outline-none bg-transparent"
          />
        </div>

        <p className="text-xs text-slate-400">
          Must have at least 8 characters
        </p>

        {/* Terms */}
        <label className="flex items-start gap-2 text-sm text-slate-500">
          <input type="checkbox" className="mt-1" />
          <p>
            I agree to the <a className="text-teal-500 font-semibold underline cursor-pointer">Terms of Service</a> and <a className="text-teal-500 font-semibold underline cursor-pointer">Privacy Policy</a>
          </p>
        </label>

        {/* Button */}
        <button
          className="w-full flex items-center justify-center gap-2
                     bg-teal-500 hover:bg-teal-600
                     text-white font-semibold
                     py-3 rounded-xl transition-all"
        >
          Sign up <FaArrowRight />
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 text-slate-400 text-sm">
        <span className="flex-1 h-px bg-slate-200"></span>
        Or continue with
        <span className="flex-1 h-px bg-slate-200"></span>
      </div>

      {/* Social Buttons */}
      <div className="flex gap-4">
        <button className="flex-1 flex items-center justify-center gap-2
                           border rounded-xl py-2 hover:bg-yellow-500 transition">
          <FaGoogle /> Google
        </button>
        <button className="flex-1 flex items-center justify-center gap-2
                           border rounded-xl py-2 hover:bg-yellow-500 transition">
          <FaApple /> Apple
        </button>
      </div>

    </div>
  )
}

export default SignupForm
