import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

const getPosts = async (req, res) => {
    try {
        const posts = await PostMessage.find();

        return res.status(200).json({
            status: "Success",
            results: posts.length,
            data: posts,
        });
    } catch (err) {
        return res.status(409).json({
            status: "Fail",
            message: err.message,
        });
    }
};

const createPost = async (req, res) => {
    try {
        const newPost = await PostMessage.create(req.body);

        if (newPost) {
            return res.status(201).json({
                status: "Success",
                data: newPost,
            });
        }
    } catch (err) {
        return res.status(409).json({
            status: "Fail",
            message: err.message,
        });
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await PostMessage.findById(id);

        if (post) {
            await PostMessage.deleteOne(post);

            return res.status(204).json({
                status: "Deleted",
            });
        }
    } catch (err) {
        return res.status(409).json({
            status: "Fail",
            message: err.message,
        });
    }
};

const patchPost = async (req, res) => {
    try {
        const { id: _id } = req.params;

        const post = req.body;

        if (!mongoose.Types.ObjectId.isValid(_id))
            return res.status(404).json({
                status: "Fail",
                message: "Not post with that id",
            });

        const patchedPost = await PostMessage.findByIdAndUpdate(
            _id,
            { ...post, _id },
            {
                new: true,
            }
        );

        return res.status(200).json({
            status: "Success",
            data: patchedPost,
        });
    } catch (err) {
        return res.status(404).json({
            status: "Fail",
            message: err.message,
        });
    }
};

const likePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                status: "Fail",
                message: "No post found",
            });
        }

        const post = await PostMessage.findById(id);

        const updatePost = await PostMessage.findByIdAndUpdate(
            id,
            { likeCount: post.likeCount + 1 },
            { new: true }
        );

        return res.status(200).json({
            status: "Success",
            data: updatePost,
        });
    } catch (err) {
        return res.status(404).json({
            status: "Fail",
            message: err.message,
        });
    }
};

export { getPosts, createPost, deletePost, patchPost, likePost };
