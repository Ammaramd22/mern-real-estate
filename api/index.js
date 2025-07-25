import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { dot } from 'node:test/reporters';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDB');}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);});

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/listing',listingRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
})