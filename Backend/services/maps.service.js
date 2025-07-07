const axios = require('axios');

module.exports.getCoordinates = async (address) => {
    const apikey = process.env.GOOGLE_MAPS_API_KEY;
    // console.log(apikey);
    
    console.log(address);
    

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apikey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to get coordinates for the address');
        }
        
    } catch (error) {
        console.error(error);
        throw error
    }
}

module.exports.getDistanceTime = async (origin, destination) => {

    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
        
    }

    const apikey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apikey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            if( response.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
                throw new Error('No results found');
            }
            return response.data.rows[0].elements[0];
            // if (element.status === 'OK') {
            //     return {
            //         distance: element.distance.text,
            //         duration: element.duration.text
            //     };
            // } else {
            //     throw new Error('Unable to get distance and time');
            // }
        } else {
            throw new Error('Error fetching distance and time');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getAutoCompletedSuggestion = async (input) => {
    if (!input || input.length < 3) {
        throw new Error('Input must be at least 3 characters long');
    }
    const apikey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apikey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.predictions;
        } else {
            throw new Error('Error fetching autocomplete suggestions');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
