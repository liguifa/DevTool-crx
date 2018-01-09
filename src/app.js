import React from "react";
import ReactDOM from "react-dom";
import {App} from "./app";

var root = document.createElement("div");
root.id = "devtool-root";
document
    .body
    .appendChild(root);

ReactDOM.render(
    <App></App>, document.getElementById("devtool-root"))