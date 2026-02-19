import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const Dashboard_welcome = () => {
  const { user } = useContext(AuthContext)
  const [value, setValue] = useState(new Date());

  const income = Number(user?.income) || 0;
  const needs = income * 0.5;
  const wants = income * 0.3;
  const savings = income * 0.2;

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col gap-4 items-center justify-center w-full h-full'>

      {user && (
        <h1 className='text-2xl font-bold text-gray-800 dark:text-white'>
          Welcome to SpendWise {user.name}!
        </h1>
      )}

      <div className="flex justify-center mt-6">
        <Clock value={value} size={200} />
      </div>

      {user?.income ? <div className="w-full max-w-2xl mt-6 rounded-2xl overflow-hidden shadow-lg
                      bg-white dark:bg-[#111C33]">

        <div className="flex flex-col items-center justify-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Income: ₹ {income.toLocaleString()}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            50-30-20 Budget Rule
          </p>
        </div>

        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-[#0B1220]">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300 text-left">
                Category
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300 text-right">
                Amount
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

            <tr>
              <td className="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">
                Needs
              </td>
              <td className="px-6 py-4 text-right text-teal-600 font-semibold">
                ₹ {needs.toLocaleString()}
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">
                Wants
              </td>
              <td className="px-6 py-4 text-right text-teal-600 font-semibold">
                ₹ {wants.toLocaleString()}
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">
                Savings
              </td>
              <td className="px-6 py-4 text-right text-teal-600 font-semibold">
                ₹ {savings.toLocaleString()}
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      :
      <div></div>
      }

    </div>
  )
}

export default Dashboard_welcome
