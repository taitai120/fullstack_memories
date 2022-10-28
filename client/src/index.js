import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./redux/reducers";
import { GoogleOAuthProvider } from "@react-oauth/google";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <GoogleOAuthProvider clientId="1006783833217-rb9ssc6viefg65lugjcteg2qhhcqpb52.apps.googleusercontent.com">
                <App />
            </GoogleOAuthProvider>
        </React.StrictMode>
    </Provider>
);
