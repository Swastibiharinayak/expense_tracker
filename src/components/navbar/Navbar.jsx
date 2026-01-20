import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import Navlist from "./Navlist"
import { useTheme } from "../../hooks/useTheme"

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <nav className='w-screen h-[78px] bg-[#f5f7fa] flex items-center justify-between shadow-lg'>
            <Link to="/" >
                <div className='w-1/5 h-full flex items-center ps-6'>
                    <img src={logo} alt="" className="w-100" />
                    <h4 className="text-blue-900 text-3xl font-semibold">SpendWise</h4>
                </div>
            </Link>

            <button
                onClick={toggleTheme}
                className="p-2 rounded-md bg-gray-300 dark:bg-gray-700 hover:opacity-80 transition"
                aria-label="Toggle theme"
            >
                {theme === "dark" ? "🌙" : "☀️"}
            </button>

            <div className='w-3/5 h-full flex'>
                <Navlist />
            </div>
        </nav>
    )
}

export default Navbar