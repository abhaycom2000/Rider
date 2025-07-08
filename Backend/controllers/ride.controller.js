const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');

module.exports.createRide = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, pickup, destination, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide({
            user: req.user._id, pickup, destination, vehicleType,
        });
        // await ride.save();
        return res.status(201).json({ message: 'Ride created successfully', ride });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating ride', error: error.message });
    }
}

module.exports.getFare = async (req,res)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const {pickup,destination}= req.query;
    try {
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json({ fare }); 
    } catch (error) {
       return res.status(500).json({ message: 'Error fetching fare', error: error.message }); 
    }
}