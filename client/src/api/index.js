import axios from "axios";

const url = "http://localhost:5000/api/v1/posts";

export const fecthPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const updatePost = (id, updatePost) =>
    axios.patch(`${url}/${id}`, updatePost);
export const likePost = (id, updatePost) =>
    axios.patch(`${url}/${id}/likePost`, updatePost);
