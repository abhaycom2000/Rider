const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { address } = req.query;
        
    try {
        const coordinates = await mapService.getCoordinates(address);
        res.status(200).json(coordinates);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: 'Error fetching coordinates', error: error.message });
    }
}

module.exports.getDistanceTime = async (req, res, next) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { origin, destination } = req.query;
        const distanceTime = await mapService.getDistanceTime(origin, destination);
        res.status(200).json(distanceTime);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: 'Error fetching distance and time', error: error.message });
    }
}

module.exports.getAutoCompletedSuggestion = async (req,res,next)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { input } = req.query;
        const suggestions = await mapService.getAutoCompletedSuggestion(input);
        res.status(200).json(suggestions);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: 'Error fetching suggestions', error: error.message });
    }
}