import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Auth from "./containers/Auth/Auth";

function App() {
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
