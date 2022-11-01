import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import Posts from "../../components/Posts/Posts";
import {
    Container,
    Grow,
    Grid,
    Paper,
    AppBar,
    TextField,
    Button,
} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import { useLocation, useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { actionGetPosts } from "../../redux/actions/postAction";
import Paginate from "../../components/Pagination/Pagination";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Home = () => {
    const [currentId, setCurrentId] = useState(0);

    const classes = useStyles();

    const dispatch = useDispatch();

    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get("page") || 1;
    const searchQuery = query.get("searchQuery");
    console.log(page);

    useEffect(() => {
        dispatch(actionGetPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid
                    className={classes.gridContainer}
                    container
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar
                            className={classes.appBarSearch}
                            position="static"
                            color="inherit"
                        >
                            <TextField
                                name="search"
                                variant="outlined"
                                label="Search Memories"
                                value="TEST"
                                onChange={() => {}}
                            />
                        </AppBar>
                        <Form
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                        />
                        <Paper className={classes.pagination} elevation={6}>
                            <Paginate />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
