import React from "react";
import useStyles from "./styles";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@material-ui/core";
import {
    ThumbUpAlt,
    Delete,
    MoreHoriz,
    ThumbUpAltOutlined,
} from "@material-ui/icons";
import moment from "moment";
import { deletePost, likePost } from "../../../redux/actions/postAction";
import { useDispatch } from "react-redux";

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem("profile"));

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find(
                (like) => like === (user?.googleId || user?._id)
            ) ? (
                <>
                    <ThumbUpAlt fontSize="small" />
                    &nbsp;
                    {post.likes.length > 2
                        ? `You and ${post.likes.length - 1} others`
                        : `${post.likes.length} like${
                              post.likes.length > 1 ? "s" : ""
                          }`}
                </>
            ) : (
                <>
                    <ThumbUpAltOutlined fontSize="small" />
                    &nbsp;{post.likes.length}{" "}
                    {post.likes.length === 1 ? "Like" : "Likes"}
                </>
            );
        }

        return (
            <>
                <ThumbUpAltOutlined fontSize="small" />
                &nbsp;Like
            </>
        );
    };

    return (
        <Card className={classes.card} raised elevataion={6}>
            <CardMedia
                className={classes.media}
                image={
                    post.selectedFile ||
                    "https://previews.123rf.com/images/cherriesjd/cherriesjd1811/cherriesjd181100025/115964342-vintage-empty-photo-nostalgic-vintage-memory-background.jpg"
                }
                title={post.title}
            />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">
                    {moment(post.createdAt).fromNow()}
                </Typography>
            </div>
            {(user?.googleId === post?.creator ||
                user?._id === post?.creator) && (
                <div className={classes.overlay2}>
                    <Button
                        style={{ color: "white" }}
                        size="small"
                        onClick={() => {
                            setCurrentId(post._id);
                        }}
                    >
                        <MoreHoriz fontSize="medium" />
                    </Button>
                </div>
            )}
            <div className={classes.details}>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="h2"
                >
                    {post.tags.map((tag) => `#${tag} `)}
                </Typography>
            </div>
            <Typography
                className={classes.title}
                gutterBottom
                variant="h5"
                component="h2"
            >
                {post.title}
            </Typography>
            <CardContent>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    gutterBottom
                >
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button
                    size="small"
                    color="primary"
                    disabled={!user}
                    onClick={() => {
                        dispatch(likePost(post._id));
                    }}
                >
                    <Likes />
                </Button>
                {(user?.googleId === post?.creator ||
                    user?._id === post?.creator) && (
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => {
                            dispatch(deletePost(post._id));
                        }}
                    >
                        <Delete fontSize="small" /> Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default Post;
