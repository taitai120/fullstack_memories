import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title must not be empty"],
    },
    message: {
        type: String,
        required: [true, "Message must not be empty"],
    },
    name: String,
    creator: {
        type: String,
        required: [true, "Creator must not be empty"],
    },
    tags: [
        {
            type: String,
            required: [true, "Tags must not be empty"],
        },
    ],
    selectedFile: {
        type: String,
    },
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
