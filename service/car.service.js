const carRepository = require('../repository/cars.repository.js');

exports.findAllCars = async() => {
    return await carRepository.findAll();
};

exports.findCarById = async(id) => {
    return await carRepository.findById(id);
};