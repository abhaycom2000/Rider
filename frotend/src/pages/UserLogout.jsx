import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserLogout() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    axios.post(`http://localhost:4000/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/login')
        }
    })
    .catch(error => {
        console.error('Error logging out:', error)
    })

  return (
    <div>
      <h2>User Logout</h2>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  )
}

export default UserLogout