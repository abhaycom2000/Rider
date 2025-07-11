import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to={'/home'} className='flex justify-center fixed right-2 top-2 h-10 w-10 items-center bg-white rounded-full'>
                <i className='text-lg font-medium ri-home-5-line'></i>
            </Link>
            <div className='h-1/2 '>
                <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map" />
            </div>
            <div className="h-1/2 p-4">
                <div className='flex justify-between items-center'>
                    <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_htKFSfBEFtrU26QTY8ITUR4FMrYJPr6QRsXKwhKXlAqzPm0EYZx65vOippVy36bKpVE&usqp=CAU" alt="car" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Abhay</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH 04 AB 1234</h4>
                        <p className='text-sm text-gray-600'>Suzuki Alto</p>
                    </div>
                </div>

                <div className="flex justify-between flex-col items-center">
                    <div className="w-full mt-5">

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
                <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding