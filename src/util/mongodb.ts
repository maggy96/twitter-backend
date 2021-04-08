import dotenv from 'dotenv';
import fs from 'fs';
import mongoose from 'mongoose';
import logger from './logger';

if (fs.existsSync(".env")) {
  dotenv.config({ path: ".env" });
  logger.debug('[mongoose] database config loaded');
}

const environment = process.env.NODE_ENV;
const prod = environment === 'production'
const mongoUrl = prod ? process.env["MONGODB_URI"] : process.env["DEV_MONGODB_URI"];

export const connectMongoDB = async (): Promise<void> => {
  try {
    if (mongoUrl) {
      await mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
      logger.info('MongoDB connected.');
    }
  } catch (error) {
    logger.error(`MongoDB connection error. ${error}`);
  }
}
