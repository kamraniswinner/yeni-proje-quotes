// controllers/quoteController.js
import Quote from '../models/quoteModel.js';

// Get all quotes
export const getAllQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find();
        res.json(quotes);
    } catch (error) {
        res.status(500).json({ error: "Unable to retrieve quotes" });
    }
};

// Get a single quote by ID
export const getQuoteById = async (req, res) => {
    try {
        const quote = await Quote.findById(req.params.id);
        if (!quote) {
            return res.status(404).json({ error: "Quote not found" });
        }
        res.json(quote);
    } catch (error) {
        res.status(500).json({ error: "Unable to retrieve the quote" });
    }
};

// Create a new quote
export const createQuote = async (req, res) => {
    try {
        const newQuote = new Quote({
            text: req.body.text,
            author: req.body.author
        });
        const savedQuote = await newQuote.save();
        res.status(201).json(savedQuote);
    } catch (error) {
        res.status(500).json({ error: "Unable to create quote" });
    }
};

// Update a quote by ID
export const updateQuote = async (req, res) => {
    try {
        const updatedQuote = await Quote.findByIdAndUpdate(
            req.params.id,
            { text: req.body.text, author: req.body.author },
            { new: true, runValidators: true }
        );
        if (!updatedQuote) {
            return res.status(404).json({ error: "Quote not found" });
        }
        res.json(updatedQuote);
    } catch (error) {
        res.status(500).json({ error: "Unable to update the quote" });
    }
};

// Delete a quote by ID
export const deleteQuote = async (req, res) => {
    try {
        const deletedQuote = await Quote.findByIdAndDelete(req.params.id);
        if (!deletedQuote) {
            return res.status(404).json({ error: "Quote not found" });
        }
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ error: "Unable to delete the quote" });
    }
};