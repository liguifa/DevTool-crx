import React from "react";
import "./component.css";

export class Menu extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <div className="devtool-menu">
                <div className="devtool-menu-item devtool-menu-one"></div>
                <div className="devtool-menu-item devtool-menu-two"></div>
            </div>
        )
    }
}