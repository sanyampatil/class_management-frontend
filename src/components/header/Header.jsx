import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Login from '../Loginpopup'
import SignupPopUp from '../SignupPopUp'

// import {}
const Header = () => {
  const [showLoginPopup, setshowLoginPopup] = useState(false)

  const [showSignup, setshowSignup] = useState(false)

  return (
    <div>
      <header className='shadow sticky z-50 top-0'>
        <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
          <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
            <Link to='/' className='flex items-center'>
              <img src='' className='mr-3 h-12' alt='Logo' />
            </Link>
            <div className='flex items-center lg:order-2'>
              <Link
                to=''
                className='text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
                onClick={() => setshowLoginPopup(true)}
              >
                Log in
              </Link>
              {showLoginPopup && (
                <Login onClose={() => setshowLoginPopup(false)} />
              )}
              <Link
                to='#'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
                onClick={() => setshowSignup(true)}
              >
                Sign up
                {showSignup && (
                  <SignupPopUp onClose={() => setshowSignup(false)} />
                )}
              </Link>
            </div>

            <div
              className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
              id='mobile-menu-2'
            >
              <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                <li>
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? 'text-blue-700' : 'text-gray-700'
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to='/Time-table'
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? 'text-orange-700' : 'text-gray-700'
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Time-Table
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to='/My-staff'
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? 'text-orange-700' : 'text-gray-700'
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    My-staff
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
export default Header
