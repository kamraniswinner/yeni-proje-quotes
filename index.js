import 'newrelic';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import quoteRoutes from './routes/quoteRoutes.js'; // Use require for CommonJSs

const app = express();

// MongoDB connection
mongoose.connect('mongodb+srv://hallmarkindustriespvtltd:RPxROb7Uh2OVUnN0@quotes.2vuxo.mongodb.net/?retryWrites=true&w=majority&appName=Quotes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

//CORS 
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Default route to check server status
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Mount the quote routes at /api/quotes
app.use('/api/quotes', quoteRoutes); // Use the quote routes

// Define the port
const PORT = process.env.PORT || 4701;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
