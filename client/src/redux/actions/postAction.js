import * as action from "../constants/postContant";
import * as api from "../../api";

const actionGetPosts = () => {
    return async (dispatch) => {
        try {
            const res = await api.fecthPosts();

            const { data } = res.data;

            dispatch({
                type: action.FETCH_ALL,
                payload: data,
            });
        } catch (err) {
            console.log(err.message);
        }
    };
};

const createPost = (newPost) => {
    return async (dispatch) => {
        try {
            const res = await api.createPost(newPost);

            const { data } = res.data;

            dispatch({
                type: action.CREATE,
                payload: data,
            });
        } catch (err) {
            console.log(err.response.data.message);
        }
    };
};

const updatePost = (postId, post) => {
    return async (dispatch) => {
        try {
            const res = await api.updatePost(postId, post);

            const { data } = res.data;

            dispatch({
                type: action.UPDATE,
                payload: data,
            });
        } catch (err) {
            console.log(err.message);
        }
    };
};

const deletePost = (postId) => {
    return async (dispatch) => {
        try {
            await api.deletePost(postId);

            dispatch({
                type: action.DELETE,
                payload: postId,
            });
        } catch (err) {
            console.log(err);
        }
    };
};

const likePost = (postId) => {
    return async (dispatch) => {
        try {
            const res = await api.likePost(postId);

            const { data } = res.data;

            dispatch({
                type: action.LIKE,
                payload: data,
            });
        } catch (err) {
            console.log(err);
        }
    };
};

const actionGetPostsBySearch = (searchQuery) => {
    return async (dispatch) => {
        try {
            const {
                data: { data },
            } = await api.fetchPostsBySearch(searchQuery);

            dispatch({
                type: action.FETCH_BY_SEARCH,
                payload: data,
            });
        } catch (err) {
            console.log(err);
        }
    };
};

export {
    actionGetPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
    actionGetPostsBySearch,
};
