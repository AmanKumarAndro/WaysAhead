const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const mongoose = require("mongoose");
const cors = require("cors");

const jobRoutes = require("./routes/jobRoutes");
const newsRoutes = require("./routes/newsRoutes");
const userRoutes = require("./routes/userRoutes"); 
const authRoutes = require("./routes/authRoutes");
const chatbotRoutes = require('./routes/chatbotRoutes');
const chatLogRoutes = require('./routes/chatLogRoutes');

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/news", newsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/chat-logs', chatLogRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Add this after mongoose connection
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
