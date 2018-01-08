import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./main";
import { store } from "./store";

var root = document.createElement("div");
root.id = "devtool-root";
document
    .body
    .appendChild(root);

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>, document.getElementById("devtool-root"))