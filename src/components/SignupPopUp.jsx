import React from 'react'
import { X } from 'lucide-react'
import { BsCursor } from 'react-icons/bs'
import { ImCross } from "react-icons/im";

export const Login = ({ onClose}) => {



  return (
    <div className='bg-opacity-30 inset-0 backdrop-blur-sm fixed flex justify-center items-center bg-black'>
      <div className=' flex flex-col gap-5 text-white relative'>
            <div className='absolute right-0 m-2  text-black'>

            <ImCross  onClick={onClose}/>
            </div>
        <div className='bg-white h-[60vh] w-[50vh] rounded-xl '>
          {/* <form className='flex flex-col' action=''> */}
          /*
          <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>

              <h2 className=' text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                Sign in to your account
              </h2>
            </div>

            <div className=' sm:mx-auto sm:w-full sm:max-w-sm'>
              <form className='space-y-6' action='#' method='POST'>
                <div className='mt-2'>
                  <label
                    htmlFor='username'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    username
                  </label>

                  <input
                    id='username'
                    name='username'
                    type='text'
                    autoComplete='current-password'
                    required
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Email address
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div>
                  <div className='flex items-center justify-between'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Password
                    </label>
                    <div className='text-sm'></div>
                  </div>
                  <div className='mt-2'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  )
}
export default Login
