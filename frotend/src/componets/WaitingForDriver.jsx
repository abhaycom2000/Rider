import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className='absolute top-0 p-1 text-center w-[93%]' onClick={() => props.waitingForDriver(false)}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line pt-4"></i></h5>

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
    </div>
  )
}

export default WaitingForDriver