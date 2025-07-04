import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContaxt } from '../context/UserContext';
import axios from 'axios';

function UserProtectedWraper({ children }) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { user, setUser } = useContext(UserDataContaxt);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [token])
    
    axios.get(`http://localhost:4000/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            const data = response.data
            setUser(data.user)
            setLoading(false)
        }
    }).catch((error) => {
        console.error("Error fetching user profile:", error);
        localStorage.removeItem('token')
        navigate('/login')
    });

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }
    // if (!user) {
    //     return (
    //         <div className='flex justify-center items-center h-screen'>
    //             <h1 className='text-2xl font-bold'>You are not authorized to view this page</h1>
    //         </div>
    //     )
    // }
    return (
        <>{children}</>
    )
}

export default UserProtectedWraper