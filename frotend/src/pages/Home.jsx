import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../componets/LocationSearchPanel';
import VehiclePanel from '../componets/VehiclePanel';
import ConfirmRide from '../componets/ConfirmRide';
import LookingForDriver from '../componets/LookingForDriver';
import WaitingForDriver from '../componets/WaitingForDriver';
import axios from 'axios';

function Home() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [VehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const [pickupSuggestion, setPickupSuggestion] = useState([])
  const [destinationSuggestion, setDestinationSuggestion] = useState([])
  const [activeField, setActiveField] = useState(null);
  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState(null)

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confimeRidePanleRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
    try {
      const response = await axios.get('http://localhost:4000/maps/get-suggestion',
        {
          params: { input: e.target.value },
          headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
      setPickupSuggestion(response.data);
    } catch (error) {
      console.log(error);

    }
  }

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    try {
      const response = await axios.get('http://localhost:4000/maps/get-suggestion',
        {
          params: { input: e.target.value },
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
      setDestinationSuggestion(response.data);
    } catch (error) {
      console.log(error);

    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        opacity: 1,
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      })
    }
    else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: 0,
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      })
    }
  }, [panelOpen]);

  useGSAP(function () {
    if (VehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
      })
    }
    else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [VehiclePanelOpen]);

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confimeRidePanleRef.current, {
        transform: 'translateY(0)',
      })
    }
    else {
      gsap.to(confimeRidePanleRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePanel]);


  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
      })
    }
    else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehicleFound]);

  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)',
      })
    }
    else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [waitingForDriver]);

  async function findTrip() {
    setVehiclePanelOpen(true);
    setPanelOpen(false);

    const response = await axios.get('http://localhost:4000/rides/get-fare',
      {
        params: { pickup, destination },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    console.log(response);
    setFare(response.data)
  }

  async function createRide() {
    const response = await axios.post('http://localhost:4000/rides/create', {
      pickup, destination, vehicleType
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  return (
    <div className='relative h-screen overflow-hidden'>
      <img className='w-20 absolute left-4 top-5' src="https://www.pngall.com/wp-content/uploads/6/Rider-PNG-Free-Download.png" alt="logo" />

      <div className=" h-screen w-screen" >
        {/* image for temporary use */}
        <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map" />
      </div>
      <div className='absolute  top-0 h-screen w-full flex flex-col justify-end '>
        <div className=" h-[30%] p-6 bg-white relative">
          <h5 ref={panelCloseRef} onClick={() => setPanelOpen(false)} className='absolute opacity-0 top-6 right-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1  top-[45%] left-10 bg-gray-600 rounded-full"></div>

            <input
              value={pickup}
              onChange={handlePickupChange}
              onClick={() => {
                setPanelOpen(true)
                setActiveField('pickup');
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              type="text"
              placeholder='Add a pickup location' />

            <input
              value={destination}
              onChange={handleDestinationChange}
              onClick={() => {
                setPanelOpen(true)
                setActiveField('destination')
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
              type="text"
              placeholder='Add a drop-off location' />
          </form>
          <button onClick={findTrip} className="bg-black text-white px-6 py-2 rounded-lg mt-4 w-full">
            Find Trip
          </button>
        </div>
        <div ref={panelRef} className=" bg-white h-0">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
            activeField={activeField}
            suggestion={activeField === 'pickup' ? pickupSuggestion : destinationSuggestion}
            setPickup={setPickup}
            setDestination={setDestination}
          />
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 bg-white px-3 py-10 translate-y-full pt-12">
        <VehiclePanel fare={fare} selectVehicle={setVehicleType} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>

      <div ref={confimeRidePanleRef} className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full pt-12">
        <ConfirmRide
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full pt-12">
        <LookingForDriver
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setVehicleFound={setVehicleFound} />
      </div>

      <div ref={waitingForDriverRef} className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12">
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>

    </div>
  )
}

export default Home