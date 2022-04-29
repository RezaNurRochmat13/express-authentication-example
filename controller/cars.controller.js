const carService = require('../service/car.service.js');

exports.findAllCarsApi = async(request, response) => {
    const cars = await carService.findAllCars();

    response.json({ data: cars });
}