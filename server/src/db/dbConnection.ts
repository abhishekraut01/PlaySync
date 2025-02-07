import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI as string;

export const connectDB = async (): Promise<void> => {
    try {
        const mongoInstance = await mongoose.connect(MONGO_URI);
        console.log('✅ MongoDB Connected on port', mongoInstance.connection.port);
    } catch (error: any) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        process.exit(1); // Exit process on failure
    }
};
