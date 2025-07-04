import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

function CaptainSignUp() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const { captain, setCaptain } = useContext(CaptainDataContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newCaptain = {
            fullname: {
                firstname: firstname,
                lastname: lastname
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }

        const response = await axios.post(`http://localhost:4000/captains/register`, newCaptain);

        if (response.status === 201) {
            const data = response.data
            setCaptain(data.captain);
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }

        setEmail(" ")
        setFirstname(" ")
        setLastname('')
        setPassword('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 h-5 mb-10' src="https://www.pngall.com/wp-content/uploads/6/Rider-PNG-Free-Download.png" alt="" />
                <form onSubmit={handleSubmit}>
                    <h3 className='text-lg w-full font-medium mb-2'>What's our Captain's name</h3>
                    <div className='flex gap-4 mb-6'>
                        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-lg' type="text" placeholder='first name ' required />

                        <input value={lastname} onChange={(e) => { setLastname(e.target.value) }} className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-llg placeholder:text-lg' type="text" placeholder='last name ' required />
                    </div>
                    <h3 className='text-base w-full font-medium mb-2'>What's our Captain's email</h3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base' type="email" placeholder='email@gmail.com' required />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base' type="password" placeholder='password' required />
                    <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                    <div className='flex gap-4 mb-6'>
                        <input
                            value={vehicleColor}
                            onChange={e => setVehicleColor(e.target.value)}
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                            type="text"
                            placeholder='Color'
                            required
                        />
                        <input
                            value={vehiclePlate}
                            onChange={e => setVehiclePlate(e.target.value)}
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                            type="text"
                            placeholder='Plate'
                            required
                        />
                    </div>
                    <div className='mb-6 gap-4 flex'>
                        <input
                            value={vehicleCapacity}
                            onChange={e => setVehicleCapacity(e.target.value)}
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                            type="number"
                            min="1"
                            placeholder='Capacity'
                            required
                        />
                        <select
                            value={vehicleType}
                            onChange={e => setVehicleType(e.target.value)}
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base'
                            required
                        >
                            <option value="" disabled>Select Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="auto">Auto</option>
                            <option value="motorcycle">Motorcycle</option>
                        </select>
                    </div>
                    <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' >Create Captain Account</button>
                </form>
                <p className='text-center'>Already have a account? <Link to={'/captain-login'} className='text-blue-600'>Login here</Link></p>
            </div>
            <div>
                <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span></p>
            </div>
        </div>
    )
}

export default CaptainSignUp