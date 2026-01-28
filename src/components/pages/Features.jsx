import React from 'react'

const Features = () => {
    return (
        <div className='w-screen px-40 py-20 flex flex-col justify-center items-center'>
            <span className='rounded-3xl bg-blue-600 px-2 py-4 text-xl'>✨ Why Choose SpendWise</span>

            <h1 className='text-transform: capitalize text-7xl font-semibold text-center'>Everything You Need to <span className='text-teal-500'>Master Your Finances</span></h1>

            <p className='text-slate-500 text-2xl'>From tracking daily expenses to planning long-term investments, our intelligent platform adapts to your financial journey.</p>

            <div className='flex flex-wrap gap-10 justify-center items-center'>
                <div className='rounded-xl hover:scale-105 bg-slate-800 transition-all duration-300 ease-out w-80 h-80 flex flex-col justify-center items-start p-6'>
                    <span className='p-8 bg-black rounded-xl'>❤️</span>
                    <h3 className='text-2xl font-semibold'>Smart Expense Tracking</h3>
                    <p className='text-slate-400'>Automatically categorize and track every expense. See where your money goes with intuitive visualizations.</p>
                </div>
                <div className='rounded-xl hover:scale-105 bg-slate-800 transition-all duration-300 ease-out w-80 h-80 flex flex-col justify-center items-start p-6'>
                    <span className='p-8 bg-black rounded-xl'>❤️</span>
                    <h3 className='text-2xl font-semibold'>Personalized Notifications</h3>
                    <p className='text-slate-400'>Get timely alerts based on your spending patterns. Never miss a bill or overspend again.</p>
                </div>
                <div className='rounded-xl hover:scale-105 bg-slate-800 transition-all duration-300 ease-out w-80 h-80 flex flex-col justify-center items-start p-6'>
                    <span className='p-8 bg-black rounded-xl'>❤️</span>
                    <h3 className='text-2xl font-semibold'>Investment Suggestions</h3>
                    <p className='text-slate-400'>AI-powered recommendations tailored to your income and risk tolerance. Grow your wealth smartly.</p>
                </div>
                <div className='rounded-xl hover:scale-105 bg-slate-800 transition-all duration-300 ease-out w-80 h-80 flex flex-col justify-center items-start p-6'>
                    <span className='p-8 bg-black rounded-xl'>❤️</span>
                    <h3 className='text-2xl font-semibold'>Goal-Based Planning</h3>
                    <p className='text-slate-400'>Set financial goals and get a personalized roadmap. Whether it's a vacation or retirement, we've got you.</p>
                </div>
                <div className='rounded-xl hover:scale-105 bg-slate-800 transition-all duration-300 ease-out w-80 h-80 flex flex-col justify-center items-start p-6'>
                    <span className='p-8 bg-black rounded-xl'>❤️</span>
                    <h3 className='text-2xl font-semibold'>Budget Analysis</h3>
                    <p className='text-slate-400'>Understand your needs vs wants. Get suggestions to optimize spending based on your salary.</p>
                </div>
                <div className='rounded-xl hover:scale-105 bg-slate-800 transition-all duration-300 ease-out w-80 h-80 flex flex-col justify-center items-start p-6'>
                    <span className='p-8 bg-black rounded-xl'>❤️</span>
                    <h3 className='text-2xl font-semibold'>Secure & Private</h3>
                    <p className='text-slate-400'>Bank-level encryption keeps your data safe. Your financial information stays yours.</p>
                </div>
            </div>
        </div>
    )
}

export default Features
