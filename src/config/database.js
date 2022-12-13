import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_DB_URL);

const database = mongoose.connection;

export default database;