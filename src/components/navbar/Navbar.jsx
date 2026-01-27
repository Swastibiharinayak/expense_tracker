import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import Navlist from "./Navlist"


const Navbar = () => {
    
    return (
        <nav className='w-100 h-[78px] bg-[#f5f7fa] dark:bg-gray-700 flex items-center justify-between shadow-lg sticky top-0 z-50 p-4'>
            <Link to="/" >
                <div className='flex items-center gap-2 '>
                    <img src={logo} alt="logo" className="w-10 rounded-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg" />
                    <h4 className="text-blue-900 dark:text-gray-200 text-3xl font-semibold">SpendWise</h4>
                </div>
            </Link>

            <div className='hidden lg:flex '>
                <Navlist />
            </div>

            <div className="hidden lg:flex gap-2 ">
                <button className="px-4 py-2 rounded-lg font-bold hover:bg-yellow-300">Sign in</button>
                <button className="px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-teal-700 to-teal-300 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg">Get Started Free</button>
            </div>
        </nav>
    )
}

export default Navbar