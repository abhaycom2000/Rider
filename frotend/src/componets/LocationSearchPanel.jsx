
import React from 'react'

const LocationSearchPanel = ({ suggestion, setPanelOpen, setVehiclePanelOpen, activeField, setDestination, setPickup }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion)
        } else if (activeField === 'destination') {
            setDestination(suggestion)
        }
        // setVehiclePanelOpen(true);
        // setPanelOpen(true)
    }

    return (
        <div>
            {
                suggestion.map((elem, index) => (
                    <div key={index} onClick={() => { handleSuggestionClick(elem) }} className="flex gap-4 border-2 p-3 rounded-md items-center justify-start my-2 border-gray-100 active:border-black">
                        <h2 className='bg-[#eee] flex items-center justify-center rounded-full w-16 h-10 '><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default LocationSearchPanel