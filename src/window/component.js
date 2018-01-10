import React from "react";
import "./component.css";

export class Window extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <div className="devtool-window">
                <div className="devtool-window-title">
                    <div className="devtool-window-title-img"></div>
                    <span>{this.props.title}</span>
                    <label onClick={(e) => this.props.onClick("")}>×</label>
                </div>
                <div className="devtool-window-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}