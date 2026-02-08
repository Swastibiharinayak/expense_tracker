import React from 'react'

const FeaturesCards = ({icon, heading, paragraph}) => {
    return (
        <div className='rounded-xl hover:scale-105 bg-slate-100 border transition-all duration-300 ease-out w-96 h-80 flex flex-col justify-center items-start p-6 hover:shadow-lg'>
            <div className='p-3 bg-green-400 rounded-xl h-12 w-12 text-2xl text-white'>
                {icon}
            </div>
            <h3 className='text-2xl font-semibold'>{heading}</h3>
            <p className='text-slate-400'>{paragraph}</p>
        </div>
    )
}

export default FeaturesCards
