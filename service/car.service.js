const carRepository = require('../repository/cars.repository.js');

exports.findAllCars = async() => {
    return await carRepository.findAll();
}