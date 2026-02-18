import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    profile_img: "",
    phone: "",
    gender: "",
  })

  const { firstname, lastname, email, password, profile_img, phone, gender } = profileData

  const handleChange = (e) => {
    const { name, value } = e.target

    setProfileData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleProfileData = (e) => {
    e.preventDefault()
    console.log(profileData)
  }

  return (
    <div className="h-full overflow-y-auto px-4 sm:px-10 py-8">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-white">
          Profile
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
          Manage your name, password and account details.
        </p>
      </div>

      <form onSubmit={handleProfileData} className="space-y-10">

        {/* Profile Photo */}
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl font-semibold text-gray-600 dark:text-gray-300">
            <FaUser />
          </div>

          <button
            type="button"
            className="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                   text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Upload Photo
          </button>
          {/* <input type="file" name="" id="" /> */}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* First Name */}
          <div>
            <label htmlFor='firstname' className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
              First Name
            </label>
            <input
              id='firstname'
              value={firstname}
              onChange={handleChange}
              type="text"
              name="firstname"
              className="w-full px-4 py-3 rounded-xl
                     bg-gray-100 dark:bg-[#0B1220]
                     border border-gray-300 dark:border-gray-700
                     focus:ring-2 focus:ring-teal-500
                     focus:outline-none transition"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor='lastname' className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
              Last Name
            </label>
            <input
              id='lastname'
              value={lastname}
              onChange={handleChange}
              type="text"
              name="lastname"
              className="w-full px-4 py-3 rounded-xl
                     bg-gray-100 dark:bg-[#0B1220]
                     border border-gray-300 dark:border-gray-700
                     focus:ring-2 focus:ring-teal-500
                     focus:outline-none transition"
            />
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label htmlFor='email' className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              id='email'
              value={email}
              onChange={handleChange}
              type="email"
              name="email"
              className="w-full px-4 py-3 rounded-xl
                     bg-gray-100 dark:bg-[#0B1220]
                     border border-gray-300 dark:border-gray-700
                     focus:ring-2 focus:ring-teal-500
                     focus:outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor='password' className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
              Password
            </label>
            <input
              id='password'
              value={password}
              onChange={handleChange}
              name='password'
              type="password"
              className="w-full px-4 py-3 rounded-xl
                     bg-gray-100 dark:bg-[#0B1220]
                     border border-gray-300 dark:border-gray-700
                     focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* <div>
            <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
              New Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl
                     bg-gray-100 dark:bg-[#0B1220]
                     border border-gray-300 dark:border-gray-700
                     focus:ring-2 focus:ring-teal-500"
            />
          </div> */}

          {/* Phone */}
          <div>
            <label htmlFor='phone' className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
              Phone
            </label>
            <input
              id='phone'
              value={phone}
              onChange={handleChange}
              name='phone'
              type="text"
              className="w-full px-4 py-3 rounded-xl
                     bg-gray-100 dark:bg-[#0B1220]
                     border border-gray-300 dark:border-gray-700"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-3 text-gray-600 dark:text-gray-300">
              Gender
            </label>

            <div className="flex gap-6">
              {["Male", "Female", "Other"].map((g) => (
                <label key={g} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    className="accent-teal-600"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {g}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Bio
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
              Bio
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 rounded-xl
                     bg-gray-100 dark:bg-[#0B1220]
                     border border-gray-300 dark:border-gray-700
                     focus:ring-2 focus:ring-teal-500"
            />
          </div> */}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button
            type="button"
            className="px-6 py-3 rounded-xl border
                   border-gray-300 dark:border-gray-600
                   hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-8 py-3 rounded-xl font-semibold text-white
                   bg-teal-600 hover:bg-teal-500
                   transition duration-300 hover:scale-105 shadow-md"
          >
            Save Changes
          </button>
        </div>

      </form>
    </div>

  )

}

export default Profile
