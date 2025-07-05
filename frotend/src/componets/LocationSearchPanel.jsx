import React from 'react'

function LocationSearchPanel(props) {

    const location = [
        "24B, Near Kapoors Cafe, Sheryans Coding School, Surat",
        "12A, Opposite City Mall, MG Road, Mumbai",
        "7C, Beside Central Park, Sector 21, New Delhi",
        "55D, Next to Riverfront, Lakeview Colony, Ahmedabad"
    ]

    return (
        <div>
            {/* this is the sample location data */}

            {location.map(function (loc, index) {
                return (
                    <div key={index} onClick={() => {
                        props.setVehiclePanelOpen(true)
                        props.setPanelOpen(false)
                    }} className='flex gap-4 border-2 p-3 rounded-md items-center justify-start my-2 border-gray-100 active:border-black'>
                        <h2 className='bg-[#eee] flex items-center justify-center rounded-full w-16 h-10 '><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{loc}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default LocationSearchPanel