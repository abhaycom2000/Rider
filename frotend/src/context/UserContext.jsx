import React, { createContext, useState } from 'react'

export const UserDataContaxt = createContext()
function UserContext({ children }) {

    const [user, setUser] = useState({
        email: '',
        fullname: {
            firstname: '',
            lastname: ''
        }
    })

    return (
        <div>
            <UserDataContaxt.Provider value={user}>
                {children}
            </UserDataContaxt.Provider>
        </div>
    )
}

export default UserContext