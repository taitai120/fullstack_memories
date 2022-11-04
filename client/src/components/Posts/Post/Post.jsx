import React from "react";
import useStyles from "./styles";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    ButtonBase,
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
import { useNavigate } from "react-router-dom";

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("profile"));

    const handleLike = async () => {
        dispatch(likePost(post._id));
    };

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find(
                (like) => like === (user?.sub || user?._id)
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

    const openPost = () => navigate(`/posts/${post._id}`);

    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase
                component="span"
                name="test"
                className={classes.cardAction}
                onClick={openPost}
            >
                <CardMedia
                    className={classes.media}
                    image={
                        post.selectedFile ||
                        "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                    }
                    title={post.title}
                />
                <div className={classes.overlay}>
                    <Typography variant="h6">{post.name}</Typography>
                    <Typography variant="body2">
                        {moment(post.createdAt).fromNow()}
                    </Typography>
                </div>
                {(user?.sub === post?.creator ||
                    user?._id === post?.creator) && (
                    <div className={classes.overlay2} name="edit">
                        <Button
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentId(post._id);
                            }}
                            style={{ color: "white" }}
                            size="small"
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
                    >
                        {post.message.split(" ").splice(0, 20).join(" ")}...
                    </Typography>
                </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button
                    size="small"
                    color="primary"
                    disabled={!user}
                    onClick={handleLike}
                >
                    <Likes />
                </Button>
                {(user?.sub === post?.creator ||
                    user?._id === post?.creator) && (
                    <Button
                        size="small"
                        color="secondary"
                        onClick={() => dispatch(deletePost(post._id))}
                    >
                        <Delete fontSize="small" /> &nbsp; Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default Post;
