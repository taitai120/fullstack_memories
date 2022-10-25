import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
    TextField,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import Input from "./Input";

const Auth = () => {
    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);

    const isSignup = true;

    const handleChange = (e) => {};

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleShowPassword = () => {
        setShowPassword((previous) => !previous);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">
                    {isSignup ? "Sign Up" : "Sign In"}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input
                                    name="firstName"
                                    label="First Name"
                                    handleChange={handleChange}
                                    autoFocus
                                    half
                                />
                                <Input
                                    name="firstName"
                                    label="First Name"
                                    handleChange={handleChange}
                                    half
                                />
                            </>
                        )}
                        <Input
                            name="email"
                            label="Email Address"
                            handleChange={handleChange}
                            type="email"
                        />
                        <Input
                            name="papssword"
                            label="Password"
                            handleChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                        />
                        {isSignup && (
                            <Input
                                name="confirmPassword"
                                label="Repeat Password"
                                handleChange={handleChange}
                                type="password"
                            />
                        )}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
