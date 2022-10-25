import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";
import { actionGetPosts } from "../../redux/actions/postAction";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);

    useEffect(() => {
        const getPosts = () => {
            dispatch(actionGetPosts());
        };

        getPosts();
    }, [dispatch]);

    const renderPosts = () => {
        return posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
                <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
        ));
    };

    return !posts.length ? (
        <CircularProgress />
    ) : (
        <Grid className={classes.mainContainer} container spacing={3}>
            {renderPosts()}
        </Grid>
    );
};

export default Posts;
