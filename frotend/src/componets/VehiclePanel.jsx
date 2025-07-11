import React from 'react'

function VehiclePanel(props) {
    return (
        <div>
            <h5 className='absolute top-0 p-1 text-center w-[93%]' onClick={() => props.setVehiclePanelOpen(false)}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line pt-4"></i></h5>

            <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
            <div onClick={()=> {props.setConfirmRidePanel(true)
                props.selectVehicle('car')
            }} className='items-center border-2 mb-2 active:border-black rounded-2xl p-3 w-full  flex justify-between'>
                <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_htKFSfBEFtrU26QTY8ITUR4FMrYJPr6QRsXKwhKXlAqzPm0EYZx65vOippVy36bKpVE&usqp=CAU" alt="car" />
                <div className=' ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>RiderGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹{props.fare.car}</h2>
            </div>

            <div onClick={()=> {props.setConfirmRidePanel(true)
                props.selectVehicle('moto')
            }} className='items-center border-2 mb-2 active:border-black rounded-2xl p-3 w-full  flex justify-between'>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="bike" />
                <div className=' ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>MotoGo <span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, Compact motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹{props.fare.moto}</h2>
            </div>

            <div onClick={()=> {props.setConfirmRidePanel(true)
                props.selectVehicle('auto')
            }} className='items-center border-2 mb-2 active:border-black rounded-2xl p-3 w-full  flex justify-between'>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="auto" />
                <div className=' ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>AutoGo <span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, Compact Auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹{props.fare.auto}</h2>
            </div>
        </div>
    )
}

export default VehiclePanel