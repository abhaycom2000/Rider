import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className="bg-cover bg-[url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQdOPqMl7Ji22EZpkZEO0Ruu-p9fQ9A1G_Yble_cAtq72gxNTq-)] h-screen pt-8 flex justify-between flex-col w-full ">
            <img className='w-16 h-5 ml-8' src="https://www.pngall.com/wp-content/uploads/6/Rider-PNG-Free-Download.png" alt="" />
            <div className="bg-white pb-7 py-4 px-4">
                <h2 className='text-[30px] font-bold'>Get Started with Rider</h2>
                <Link to={'/login'} className='flex justify-center items-center w-full bg-black text-white py-3 rounded-md mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home