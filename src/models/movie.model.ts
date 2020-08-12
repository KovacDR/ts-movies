import { Schema, model } from 'mongoose';

const movieSchema = new Schema({

    title: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    genre: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }

});

export default model('Movie', movieSchema);