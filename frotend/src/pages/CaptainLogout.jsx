import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CaptainLogout() {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.post(`http://localhost:4000/captains/logout`,  {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/captain-login')
        }
    }).catch((error) => {
        console.error("Error logging out:", error);
    });

    return (
        <div>
            <h1>Captain Logout</h1>
        </div>
    )
}

export default CaptainLogout