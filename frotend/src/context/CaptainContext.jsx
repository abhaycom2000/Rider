import React, { createContext, useContext, useState } from 'react';

 export const CaptainDataContext = createContext();


 const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const updateCaptain = (newCaptain) => {
        setCaptain(newCaptain);
    };

    const value = {
        captain, setCaptain,
        loading,
        setLoading,
        error,
        setError,
        updateCaptain
    }

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;