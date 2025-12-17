import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// import Task route
import taskRoute from './routes/task.routes.js';

// Task route
app.use('/', taskRoute);

// import error middleware
import errorHandler from './middleware/error.middleware.js';

// Error Handler
app.use(errorHandler);

export default app;
