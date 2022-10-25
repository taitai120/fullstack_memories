import express from "express";
import {
    getPosts,
    createPost,
    deletePost,
    patchPost,
    likePost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/:id", patchPost);
router.patch("/:id/likePost", likePost);

export default router;
