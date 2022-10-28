import React, { useState, useEffect } from "react";
import useStyles from "./styles.js";
import memories from "./../../images/memories.png";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = ({}) => {
    const classes = useStyles();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );

    useEffect(() => {
        const token = user?.token;

        // JWT...
        setUser(JSON.parse(localStorage.getItem("profile")));
    }, []);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography
                    component={Link}
                    className={classes.heading}
                    variant="h2"
                    align="center"
                    to="/"
                >
                    Memories
                </Typography>
                <img
                    className={classes.image}
                    src={memories}
                    alt="icon"
                    height="60"
                />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar
                            className={classes.purple}
                            alt={user?.name}
                            src={user?.picture}
                        >
                            {user?.name?.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">
                            {user?.name}
                        </Typography>
                        <Button
                            variant="contained"
                            className={classes.logout}
                            color="secondary"
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button
                        component={Link}
                        to="/auth"
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
