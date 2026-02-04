import React from 'react'
import { FaArrowCircleUp, FaBell, FaBullseye, FaChartPie, FaWallet } from 'react-icons/fa'
import { FaArrowTrendUp, FaShield } from 'react-icons/fa6'

const Features = () => {
    return (
        <>
            <div className='w-screen px-40 py-20 flex flex-col justify-center items-center'>
                <span className='rounded-3xl border p-4 text-xl bg-slate-50'>✨ Why Choose SpendWise</span>

                <h1 className='text-transform: capitalize text-7xl font-semibold text-center'>Everything You Need to <span className='text-teal-500'>Master Your Finances</span></h1>

                <p className='text-slate-500 text-2xl'>From tracking daily expenses to planning long-term investments, our intelligent platform adapts to your financial journey.</p>

                <div className='flex flex-wrap gap-5 justify-center items-center'>
                    <div className='rounded-xl hover:scale-105 bg-slate-100 border transition-all duration-300 ease-out w-96 h-80 flex flex-col justify-center items-start p-6 hover:shadow-lg'>
                        <div className='p-3 bg-green-400 rounded-xl h-12 w-12'>
                            <FaWallet className="text-2xl text-white" />
                        </div>
                        <h3 className='text-2xl font-semibold'>Smart Expense Tracking</h3>
                        <p className='text-slate-400'>Automatically categorize and track every expense. See where your money goes with intuitive visualizations.</p>
                    </div>
                    <div className='rounded-xl hover:scale-105 bg-slate-100 border transition-all duration-300 ease-out w-96 h-80 flex flex-col justify-center items-start p-6 hover:shadow-lg'>
                        <div className='p-3 bg-green-400 rounded-xl h-12 w-12'>
                            <FaBell className="text-2xl text-white" />
                        </div>
                        <h3 className='text-2xl font-semibold'>Personalized Notifications</h3>
                        <p className='text-slate-400'>Get timely alerts based on your spending patterns. Never miss a bill or overspend again.</p>
                    </div>
                    <div className='rounded-xl hover:scale-105 bg-slate-100 border transition-all duration-300 ease-out w-96 h-80 flex flex-col justify-center items-start p-6 hover:shadow-lg'>
                        <div className='p-3 bg-green-400 rounded-xl h-12 w-12'>
                            <FaArrowTrendUp className="text-2xl text-white" />
                        </div>
                        <h3 className='text-2xl font-semibold'>Investment Suggestions</h3>
                        <p className='text-slate-400'>AI-powered recommendations tailored to your income and risk tolerance. Grow your wealth smartly.</p>
                    </div>
                    <div className='rounded-xl hover:scale-105 bg-slate-100 border transition-all duration-300 ease-out w-96 h-80 flex flex-col justify-center items-start p-6 hover:shadow-lg'>
                        <div className='p-3 bg-green-400 rounded-xl h-12 w-12'>
                            <FaBullseye className="text-2xl text-white" />
                        </div>
                        <h3 className='text-2xl font-semibold'>Goal-Based Planning</h3>
                        <p className='text-slate-400'>Set financial goals and get a personalized roadmap. Whether it's a vacation or retirement, we've got you.</p>
                    </div>
                    <div className='rounded-xl hover:scale-105 bg-slate-100 border transition-all duration-300 ease-out w-96 h-80 flex flex-col justify-center items-start p-6 hover:shadow-lg'>
                        <div className='p-3 bg-green-400 rounded-xl h-12 w-12'>
                            <FaChartPie className="text-2xl text-white" />
                        </div>
                        <h3 className='text-2xl font-semibold'>Budget Analysis</h3>
                        <p className='text-slate-400'>Understand your needs vs wants. Get suggestions to optimize spending based on your salary.</p>
                    </div>
                    <div className='rounded-xl hover:scale-105 bg-slate-100 border transition-all duration-300 ease-out w-96 h-80 flex flex-col justify-center items-start p-6 hover:shadow-lg'>
                        <div className='p-3 bg-green-400 rounded-xl h-12 w-12'>
                            <FaShield className="text-2xl text-white" />
                        </div>
                        <h3 className='text-2xl font-semibold'>Secure & Private</h3>
                        <p className='text-slate-400'>Bank-level encryption keeps your data safe. Your financial information stays yours.</p>
                    </div>
                </div>
            </div>
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    {/* Heading */}
                    <h2 className="text-4xl font-semibold text-gray-900">
                        How It Works
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Get started in minutes and transform your financial life in three simple steps.
                    </p>

                    {/* Steps */}
                    <div className="relative mt-20">

                        {/* Connecting line */}
                        <div className="absolute top-6 left-0 right-0 h-[2px] bg-teal-200"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

                            {/* Step 1 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="z-10 w-14 h-14 flex items-center justify-center
                              rounded-full bg-teal-500 text-white font-semibold">
                                    01
                                </div>
                                <h3 className="mt-6 text-lg font-semibold">
                                    Connect Your Accounts
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    Securely link your bank accounts and cards for automatic tracking.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="z-10 w-14 h-14 flex items-center justify-center
                              rounded-full bg-teal-500 text-white font-semibold">
                                    02
                                </div>
                                <h3 className="mt-6 text-lg font-semibold">
                                    Set Your Goals
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    Tell us your income, expenses, and what you're saving for.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="z-10 w-14 h-14 flex items-center justify-center
                              rounded-full bg-teal-500 text-white font-semibold">
                                    03
                                </div>
                                <h3 className="mt-6 text-lg font-semibold">
                                    Get AI Insights
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    Receive personalized suggestions and watch your wealth grow.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-16">
                        <button className="px-8 py-4 bg-teal-500 text-white rounded-lg
                             font-medium hover:bg-teal-600 transition">
                            Start Your Journey →
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Features
