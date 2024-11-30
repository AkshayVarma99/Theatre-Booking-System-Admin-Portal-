const mongoose = require('mongoose');

const isInteger = (value) => {
  return Number.isInteger(value);
};

const movieshowsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
        min: 0,
    },
    genre: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    tickets: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: isInteger, // Use the custom validator function
            message: 'Tickets must be an integer value',
        },
    },
    poster: {
        type: String,
        required: false,
    },
    isDraft: {
        type: Boolean,
        required: true,
        default: true,
    },
    isLocked: {
        type: Boolean,
        required: true,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model("draftmovies", movieshowsSchema);
