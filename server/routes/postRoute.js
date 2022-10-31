import express from "express";
import {
    getPosts,
    createPost,
    deletePost,
    patchPost,
    likePost,
} from "../controllers/postController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPost);
router.delete("/:id", auth, deletePost);
router.patch("/:id", auth, patchPost);
router.patch("/:id/likePost", auth, likePost);

export default router;
