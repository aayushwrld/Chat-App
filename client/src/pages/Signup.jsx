import React from 'react'
import { Link } from 'react-router-dom'
import GenderCheckbox from '../components/GenderCheckbox'

function Signup() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="bg-custom-gray rounded-lg shadow-2xl p-8 w-full sm:max-w-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Sign up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-black"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-gray-200 text-black"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-black"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-gray-200 text-black"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-black"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-gray-200 text-black"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-black"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-gray-200 text-black"
                />
              </div>
            </div>
            <GenderCheckbox />
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 transition duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-black">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold leading-6 text-blue-700 hover:text-blue-800">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup