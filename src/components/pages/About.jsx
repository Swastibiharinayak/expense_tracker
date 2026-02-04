import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { FaRightFromBracket } from 'react-icons/fa6'

const About = () => {
  return (
    <section className="bg-gradient-to-b from-[#0E1A2D] to-[#0B1220] py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-green-600/20 text-green-400 px-4 py-1 rounded-full text-sm mb-6">
            About SpendWise
          </span>

          <h2 className="text-5xl font-bold text-white leading-tight">
            We Believe Everyone <br />
            Deserves{" "}
            <span className="text-green-400">Financial Freedom</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            SpendWise was born from a simple idea: managing money shouldn't be
            complicated. Our team of financial experts and tech innovators came
            together to create an intelligent platform that understands your
            unique financial situation.
          </p>

          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            Whether you're living paycheck to paycheck or planning for early
            retirement, our AI adapts to your needs, providing personalized
            guidance that helps you make smarter decisions every day.
          </p>

          {/* CHECKLIST */}
          <ul className="mt-10 space-y-4">
            <li className="flex items-center gap-3 text-gray-200">
              <span className='p-2 rounded-full bg-green-600'><FaCheck/></span>
              Personalized recommendations based on your income and goals
            </li>
            <li className="flex items-center gap-3 text-gray-200">
              <span className='p-2 rounded-full bg-green-600'><FaCheck/></span>
              Real-time tracking with intelligent categorization
            </li>
            <li className="flex items-center gap-3 text-gray-200">
              <span className='p-2 rounded-full bg-green-600'><FaCheck/></span>
              Secure, bank-level encryption for your peace of mind
            </li>
          </ul>
        </div>

        {/* RIGHT STATS GRID */}
        <div className="grid grid-cols-2 gap-8">

          {/* Card */}
          
        </div>

      </div>
    </section>
  )
}

export default About
