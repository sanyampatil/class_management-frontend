import React from 'react'
import { X } from 'lucide-react'
export const Login = () => {
  return (
    <div className='bg-opacity-30 inset-0 backdrop-blur-sm fixed flex justify-center items-center bg-black'>
      {/* <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css" /> */}

      {/* <!-- This is an example component --> */}
      <div classNameName='max-w-2xl mx-auto   '>
        {/* <!-- Modal toggle --> */}
       

        {/* <!-- Main modal --> */}
        <div
          id='authentication-modal'
          aria-hidden='true'
          classNameName='hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center bg-black'

        >
          <div classNameName='relative w-full max-w-md px-4 h-full md:h-auto'>
            {/* <!-- Modal content --> */}
            <div classNameName='bg-white rounded-lg shadow relative dark:bg-gray-700'>
              <div classNameName='flex justify-end p-2'>
                <button
                  type='button'
                  classNameName='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
                  data-modal-toggle='authentication-modal'
                >
                  <svg
                    classNameName='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </button>
              </div>
              <form
                classNameName='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'
                action='#'
              >
                <h3 classNameName='text-xl font-medium text-gray-900 dark:text-white'>
                  Sign in to our platform
                </h3>
                <div>
                  <label
                    for='email'
                    classNameName='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    classNameName='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                    placeholder='name@company.com'
                    required=''
                  />
                </div>
                <div>
                  <label
                    for='password'
                    classNameName='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
                  >
                    Your password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    classNameName='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                    required=''
                  />
                </div>
                <div classNameName='flex justify-between'>
                  <div classNameName='flex items-start'>
                    <div classNameName='flex items-center h-5'>
                      <input
                        id='remember'
                        aria-describedby='remember'
                        type='checkbox'
                        classNameName='bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                        required=''
                      />
                    </div>
                    <div classNameName='text-sm ml-3'>
                      <label
                        for='remember'
                        className='font-medium text-gray-900 dark:text-gray-300'
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href='#'
                    className='text-sm text-blue-700 hover:underline dark:text-blue-500'
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type='submit'
                  className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Login to your account
                </button>
                {/* <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
                  Not registered?{' '}
                  <a
                    href='#'
                    className='text-blue-700 hover:underline dark:text-blue-500'
                  >
                    Create account
                  </a>
                </div> */}
              </form>
            </div>
          </div>
        </div>

        {/* <p className="mt-5">This modal element is part of a larger, open-source library of Tailwind CSS components. Learn more by going to the official <a className="text-blue-600 hover:underline" href="#" target="_blank">Flowbite Documentation</a>.</p> */}
      </div>

      {/* <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script> */}
    </div>
  )
}
export default Login
