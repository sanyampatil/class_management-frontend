import React from 'react'
import Teacher from '../../assets/Teacher.png'
const Home = () => {
  return (
    <div >
      <main className='w-[100%] h-[76vh] pl-20 pr-20'>
        <div className='flex justify-between items-center '>
          <div className='w-[43%] h-[40vh]  mb-10 z-[2]   '>
            <img src={Teacher} alt='' />
          </div>

          {/* code for left info */}

            <div className=' w-[40%] h-[50%] mt-[10%]'>
            <div>
              <h1 className='text-[70px] font-bold'>CLASSROOM</h1>
            </div>

            <div className='description'>
              <p className='text-[1.5rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaml
                lorem10 officiis numquam laudantium eos reprehenderit rem
                commodi deleniti error officia autem.
              </p>
            </div>
            <div>
              <button
                class='middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-8
                '

              
                data-ripple-light='true'
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
