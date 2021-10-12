const mongoose = require('mongoose');

const accesorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    }
})

const Accesor = mongoose.model('Accesor', accesorSchema)

module.exports = Accesor