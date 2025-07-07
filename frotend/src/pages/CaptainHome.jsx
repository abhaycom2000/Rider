import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../componets/CaptainDetails'
import RidePopUp from '../componets/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../componets/ConfirmRidePopUp'

function CaptainHome() {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null)

  useGSAP(function () {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(0)',
      })
    }
    else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [ridePopUpPanel]);

  useGSAP(function () {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(0)',
      })
    }
    else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePopUpPanel]);

  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://www.pngall.com/wp-content/uploads/6/Rider-PNG-Free-Download.png" alt="logo" />
        <Link to={'/captain-home'} className='flex justify-center h-10 w-10 items-center bg-white rounded-full'>
          <i className='text-lg font-medium ri-logout-box-r-line'></i>
        </Link>
      </div>

      <div className='h-3/5 '>
        <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map" />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div ref={ridePopUpPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>
      <div ref={confirmRidePopUpPanelRef} className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} />
      </div>
    </div>
  )
}

export default CaptainHome