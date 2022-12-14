import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, require: true },
        nationality: { type: String }
    },
    {
        versionKey: false
    }
);

const authors = new mongoose.model('authors', authorSchema);

export default authors;
