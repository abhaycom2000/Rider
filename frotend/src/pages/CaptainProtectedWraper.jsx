import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

function CaptainProtectedWraper({ children }) {
    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [loading, setLoading] = useState(true)
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }
    }, [token])

    axios.get(`http://localhost:4000/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            const data = response.data
            setCaptain(data.captain)
            setLoading(false)
        }
    }).catch((error) => {
        console.error("Error fetching captain profile:", error);
        localStorage.removeItem('token')
        navigate('/captain-login')
    });

    if (loading) {
        return (    
            <div>Loding..</div>
        )
    }

    return (
        <>{children}</>
    )
}

export default CaptainProtectedWraper