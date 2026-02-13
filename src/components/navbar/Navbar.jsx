import { useContext, useEffect, useState } from "react"
import logo from "../../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"
import Navlist from "./Navlist"
import { FaBars } from "react-icons/fa"
import AuthContext from "../../context/AuthContext"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const { user, logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
    alert("User Logged out")
    navigate("/")
  }


  return (
    <nav
      className={`
        fixed top-0 z-50 w-full
        flex items-center justify-between
        px-6 py-4
        transition-all duration-300
        ${scrolled
          ? "bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-md"
          : "bg-transparent"
        }
      `}
    >
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-10 rounded-full hover:scale-105 transition"
          />
          <h4 className="text-teal-500 dark:text-gray-200 text-2xl font-semibold">
            Spend<span className="text-yellow-400">Wise</span>
          </h4>
        </div>
      </Link>

      {/* Nav links (Desktop) */}
      <div className="hidden lg:flex">
        <Navlist />
      </div>

      {/* Hamburger (Mobile) */}
      <div className="lg:hidden cursor-pointer text-2xl text-gray-700 dark:text-gray-200" >
        <FaBars />
      </div>

      {/* Auth buttons (Desktop) */}
      {
        !user ?
          <div className="hidden lg:flex gap-3">
            <Link to="/login">
              <button className="px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
                Sign in
              </button>
            </Link>
            <button
              className="px-4 py-2 rounded-lg font-semibold text-white
                     bg-gradient-to-r from-teal-700 to-teal-300
                     hover:scale-105 transition"
            >
              Get Started Free
            </button>
          </div>
          :
          <button
            className="px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
      }

    </nav>
  )
}

export default Navbar
