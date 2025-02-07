import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import path from 'path';
import { Request, Response, NextFunction } from 'express';
import errorHandler from './middlewares/globelErrorhandler';
import ApiError from './utils/ApiError';


// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app: Application = express();

// Middlewares
app.use(cors({
    origin:process.env.CORS_ORIGIN
})); 
app.use(helmet()); 
app.use(compression()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Import and use routes



// 404 Handler
app.use((req: Request, res: Response, next: NextFunction) => {
    next(new ApiError(404, 'Route Not Found'));
});

// Global Error Handler
app.use(errorHandler); 
export default app;
