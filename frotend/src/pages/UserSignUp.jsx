import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContaxt } from '../context/UserContext'

function UserSignUp() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [userData, setUserData] = useState({})

    const { user, setUser } = useContext(UserDataContaxt)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newUser = {
            fullname: {
                firstname: firstname,
                lastname: lastname
            },
            email: email,
            password: password
        }

        const response = await axios.post(`http://localhost:4000/users/register`, newUser)

        if (response.status === 201) {
            const data = response.data

            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/home')
        }

        setEmail(" ")
        setFirstname(" ")
        setLastname('')
        setPassword('')
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 h-5 mb-10' src="https://www.pngall.com/wp-content/uploads/6/Rider-PNG-Free-Download.png" alt="" />
                <form onSubmit={handleSubmit}>
                    <h3 className='text-lg font-medium mb-2'>What's your name</h3>
                    <div className='flex gap-4 mb-6'>
                        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-lg' type="text" placeholder='first name ' required />

                        <input value={lastname} onChange={(e) => { setLastname(e.target.value) }} className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-llg placeholder:text-lg' type="text" placeholder='last name ' required />
                    </div>
                    <h3 className='text-base font-medium mb-2'>What's your email</h3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base' type="email" placeholder='email@gmail.com' required />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base' type="password" placeholder='password' required />

                    <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' >Create Account</button>
                </form>
                <p className='text-center'>Already have a account? <Link to={'/login'} className='text-blue-600'>Login here</Link></p>
            </div>
            <div>
                <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span></p>
            </div>
        </div>
    )
}

export default UserSignUp