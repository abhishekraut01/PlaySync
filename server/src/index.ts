import app from './app';
import { connectDB } from './db/dbConnection';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({
    path: path.resolve(__dirname, '../.env')
})

// Start the server after successful DB connection
connectDB()
    .then(() => {
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`🚀 Server started on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(`❌ Something went wrong while connecting to the database: ${err.message}`);
        process.exit(1); // Exit process with failure code
    })