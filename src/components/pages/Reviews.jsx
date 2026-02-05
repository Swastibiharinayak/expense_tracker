import React from 'react'
import { FaStar } from 'react-icons/fa'

const Reviews = () => {
  return (
    <section className="bg-slate-100 p-28">
        <div className='flex flex-col items-center justify-center gap-5 px-96 text-center'>
          <span className=" bg-yellow-100 text-yellow-400 px-4 py-1 rounded-full text-sm flex items-center gap-2">
            <FaStar />User Reviews
          </span>

          <h2 className="text-5xl font-bold">
            Loved by Thousands of {" "}
            <span className="text-yellow-500">Happy Users</span>
          </h2>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            Join our community of financially empowered individuals who have transformed their relationship with money.
          </p>
        </div>


    </section>
  )
}

export default Reviews
