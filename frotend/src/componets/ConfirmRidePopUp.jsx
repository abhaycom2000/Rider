import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div >
            <h5 className='absolute top-0 p-1 text-center w-[93%]' onClick={() => { props.setRidePopUpPanel(false) }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line pt-4"></i></h5>

            <h3 className="text-2xl font-semibold mb-5">Confirm this ride to Start</h3>
            <div className='flex justify-between items-center mt-4 p-3 rounded-lg bg-yellow-400'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdoay7VbsVZzZ1bZkX4k0T77hp5sb_ciXdQ&s" alt="" />
                    <h2 className='text-lg font-medium'>Ani Patel</h2>
                </div>
                <h5 className="text-lg font-semibold">2.2 KM</h5>
            </div>

            <div className="flex gap-2 justify-between flex-col items-center">
                <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className='text-lg ri-map-pin-user-fill'></i>
                        <div className="">
                            <h3 className="text-lg font-medium">562/11A</h3>
                            <p className="text-sm -mt-1 text-gray-600">Gopi Talab, Surat</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className='text-lg ri-map-pin-user-fill'></i>
                        <div className="">
                            <h3 className="text-lg font-medium">562/11A</h3>
                            <p className="text-sm -mt-1 text-gray-600">Gopi Talab, Surat</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 '>
                        <i className='ri-currency-line'></i>
                        <div className="">
                            <h3 className="text-lg font-medium">Rs 193.20</h3>
                            <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-6 w-full">
                <form onSubmit={submitHandler} >
                    <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' placeholder='Enter OTP' />
                    <Link to={'/captain-riding'} className='w-full text-lg mt-5 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</Link>
                    <button onClick={() => {
                        props.setConfirmRidePopUpPanel(false)
                        props.setRidePopUpPanel(false)
                    }} className='w-full mt-2 text-lg bg-red-600 text-white font-semibold p-3 rounded-lg'>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp