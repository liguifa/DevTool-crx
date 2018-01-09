import React from "react";
import "./component.css";

export class Nav extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {}
    }

    render() {
        return (
            <div onClick={(e) => this.props.onClick(e)} className="devtool-nav">
            </div>
        )
    }
}