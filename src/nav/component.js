import React from "react";
import { Draggable } from "react-as-drag";
import "./component.css";

export class Nav extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {}
    }

    render() {
        return (
            <Draggable type="fixed" style={{ bottom: "10px", right: "10px" }}>
                <div onClick={(e) => this.props.onClick(e)} className="devtool-nav">
                </div>
            </Draggable>
        )
    }
}