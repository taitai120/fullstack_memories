import * as action from "../constants/postContant";
import * as api from "../../api";

const actionGetPosts = (page) => {
    return async (dispatch) => {
        try {
            dispatch({ type: action.START_LOADING });

            const res = await api.fecthPosts(page);

            const { data } = res;

            dispatch({
                type: action.FETCH_ALL,
                payload: data,
            });

            dispatch({ type: action.END_LOADING });
        } catch (err) {
            console.log(err.message);
        }
    };
};

const createPost = (newPost) => {
    return async (dispatch) => {
        try {
            dispatch({ type: action.START_LOADING });

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
            dispatch({ type: action.START_LOADING });
            const res = await api.fetchPostsBySearch(searchQuery);

            const { data } = res;

            dispatch({
                type: action.FETCH_BY_SEARCH,
                payload: data,
            });

            dispatch({ type: action.END_LOADING });
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
