import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    const dashboardItems = ["overview", "expenses", "goals", "profile", "insights"]

    return (
        <div className="w-full h-[88.8vh] flex bg-white dark:bg-black text-black dark:text-gray-200">
            {/* Sidebar menu */}
            <div className="w-[18%] h-full bg-blue-900 rounded-r-3xl text-white ">
                <h1 className="text-yellow-500 text-2xl ms-8 mt-12 font-semibold">User Dashboard</h1>
                <ul className="text-white flex flex-col  gap-7 pt-10 ps-7 capitalize text-xl font-semibold">
                    {
                        dashboardItems.map((i) => {
                            return (
                                // <Link to={`/dashboard/${i}`}>
                                    <li className='hover:bg-yellow-400 rounded-xl px-3 py-3 w-[55%] hover:text-blue-950'>
                                        {i}
                                    </li>
                                // </Link>
                            )
                        })
                    }
                </ul>

            </div>
            <div className="w-[82%] h-full">

                <div className="w-[80%] dark:bg-gray-900 bg-slate-100 h-[80%] shadow-lg rounded-lg  mt-14 ms-32 text-center">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
