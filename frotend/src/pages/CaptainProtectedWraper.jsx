import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

function CaptainProtectedWraper({ children }) {
    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [loading, setLoading] = useState(true)
    const token = localStorage.getItem('token');
    console.log('CaptainProtectedWraper captain:', captain);

    // useEffect(() => {
    //     if (!token) {
    //         navigate('/captain-login')
    //     }
    // }, [token])

    // axios.get(`http://localhost:4000/captains/profile`, {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }).then((response) => {
    //     if (response.status === 200) {
    //         const data = response.data
    //         setCaptain(data?.captain || data?.captainData || data);
    //         console.log('Captain profile data:', data);
    //         setLoading(false)
    //     }
    // }).catch((error) => {
    //     console.error("Error fetching captain profile:", error);
    //     localStorage.removeItem('token')
    //     navigate('/captain-login')
    // });

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
            return;
        }

        const fetchCaptainProfile = async () => {
            try {
                const response = await axios.get('http://localhost:4000/captains/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    const data = response.data;
                    setCaptain(data?.captain || null);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching captain profile:", error);
                localStorage.removeItem('token');
                navigate('/captain-login');
            }
        };

        fetchCaptainProfile();
    }, [token, navigate, setCaptain]);


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