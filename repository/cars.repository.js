const db = require('../models/index.js');
const Car = db.car;

exports.findAll = async() => {
    return await Car.findAll();
};

exports.findById = async(id) => {
    return await Car.findByPk(id);
};