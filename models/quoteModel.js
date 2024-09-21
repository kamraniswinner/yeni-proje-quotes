// models/quoteModel.js
import mongoose from 'mongoose';

// Define the Quote schema
const quoteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true // Removes unnecessary white spaces
    },
    author: {
        type: String,
        default: "Unknown" // Optional author field
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically set to the current date
    },
    updatedAt: {
        type: Date,
        default: Date.now // Automatically set to the current date
    }
});

// Create the Quote model
const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;
