import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from "./styles";
import memories from "./images/memories.png";
import { useDispatch, useSelector } from "react-redux";
import { actionGetPosts } from "./redux/actions/postAction";

function App() {
    const [currentId, setCurrentId] = useState(null);

    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionGetPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar
                className={classes.appBar}
                position="static"
                color="inherit"
            >
                <Typography
                    className={classes.heading}
                    variant="h2"
                    align="center"
                >
                    Memories
                </Typography>
                <img
                    className={classes.image}
                    src={memories}
                    alt="icon"
                    height="60"
                />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid
                        className={classes.mainContainer}
                        container
                        justify="space-between"
                        alignItems="strech"
                        spacing={3}
                    >
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form
                                currentId={currentId}
                                setCurrentId={setCurrentId}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
