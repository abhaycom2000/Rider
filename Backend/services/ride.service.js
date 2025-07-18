const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');


async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);
    const baseFare = {
        auto: 30,
        car: 50,
        moto: 20
    };
    const perKmRate = {
        auto: 10,
        car: 15,
        moto: 8
    };
    const perMinRate = {
        auto: 2,
        car: 3,
        moto: 1.5
    };

    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinRate.car)),
        moto: Math.round(baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto) + ((distanceTime.duration.value / 60) * perMinRate.moto))
    };
    return fare;

}

module.exports.getFare = getFare;

function getOtp(num){
    function generateOTP() {
      const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOTP();
}

module.exports.createRide = async ({
    user, pickup, destination, vehicleType,
}) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('All fiekd are required')
    }

    const fare = await getFare(pickup, destination);

    const ride = new rideModel({
        user,
        pickup,
        destination,
        fare: fare[vehicleType],
        otp: getOtp(6),
    });
    return ride
}
