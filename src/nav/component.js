import React from "react";
import "./component.css";

export default class Nav extends React.Component {
    constructor() {
        super(...args);
        this.state = {}
    }

    render() {
        return (
            <div className="devtool-nav">
                <img src="../images/devtool.png" />
            </div>
        )
    }
}