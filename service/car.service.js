const carRepository = require('../repository/cars.repository.js');
const cloudinaryConfig = require('../config/cloudinary.config.js');

exports.findAllCars = async() => {
    return await carRepository.findAll();
};

exports.findCarById = async(id) => {
    return await carRepository.findById(id);
};


exports.createNewCar = async(payload) => {
    try {
        const uploadFoto = await cloudinaryConfig.uploader.upload(payload.files.foto.path);

        const car = {
            nama: payload.fields.nama,
            sewa: payload.fields.sewa,
            ukuran: payload.fields.ukuran,
            foto: uploadFoto.secure_url
        };

        return await carRepository.save(car);
    } catch (err) {
        console.error(err);
    }

};