import React from 'react'

const CaptainDetails = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center justify-start gap-4'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="driver" />
                    <h4 className='text-lg font-medium'>Anu Patel</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>Rs 295.20</h4>
                    <p className='text-sm font-medium text-gray-600'>Earned</p>
                </div>
            </div>
            <div className='flex justify-center mt-8 p-3 bg-gray-100 rounded-xl items-start gap-5'>
                <div className='text-center'>
                    <i className='text-3xl font-thin ri-timer-2-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className='text-3xl font-thin ri-speed-up-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className='text-3xl font-thin ri-booklet-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails