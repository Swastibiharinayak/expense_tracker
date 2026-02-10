import React from 'react'
import { FaAngleLeft, FaAngleRight, FaStar } from 'react-icons/fa'
import TestimonialCard from '../utils/TestimonialCards'

const Reviews = () => {
  return (
    <section className="bg-white py-28">
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

      <div className='w-full min-h-full'>
        {/* button container  */}
        <div className='flex items-center justify-center gap-4'>
          <button className='p-3 rounded-full shadow-sm shadow-slate-700 text-xl'><FaAngleLeft /> </button>
          <button className='p-3 rounded-full shadow-sm shadow-slate-700 text-xl'><FaAngleRight /> </button>
        </div>
        <TestimonialCard 
          rating= {5}
          quote= "SpendWise completely transformed how I manage my finances. The AI suggestions helped me save an extra $500 per month without feeling like I'm sacrificing anything."
          name= "Sarah Mitchell"
          role= "Marketing Manager"
        />

      </div>


    </section>
  )
}

export default Reviews
