import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CaptainLogin() {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [captainData, setCaptainData] = useState({})
    
        const handleLoginSubmit = (e) => {
            e.preventDefault()
            console.log("hello");
            setCaptainData({
                email: email,
                password: password
            })
            setEmail('')
            setPassword('')
        }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 h-5 mb-10' src="https://www.pngall.com/wp-content/uploads/6/Rider-PNG-Free-Download.png" alt="" />
                <form onSubmit={handleLoginSubmit}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="text" placeholder='email@gmail.com' required />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password' required />

                    <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' >Login</button>
                </form>
                <p className='text-center'>Join a fleet? <Link to={'/captain-signup'} className='text-blue-600'>Register as a Captain</Link></p>
            </div>
            <div>
                <Link to={'/login'} className='bg-[#d5622d] text-[#fff] flex items-center justify-center font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base' >Sign in as User</Link>
            </div>
        </div>
    )
}

export default CaptainLogin