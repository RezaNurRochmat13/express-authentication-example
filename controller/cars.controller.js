const carService = require('../service/car.service.js');

exports.findAllCarsApi = async(request, response) => {
    const cars = await carService.findAllCars();

    response.json({ data: cars });
};

exports.findCarByIdApi = async(request, response) => {
    const car = await carService.findCarById(request.params.id);

    if (car != null) {
        response.json({ data: car });
    } else {
        response.status(404).json({ error: `Car not found with id ${request.params.id}` });
    }
};