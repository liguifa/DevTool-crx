import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./component.css";

export class Menu extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <div className="devtool-menu">
                {
                    this.props.menus.map(item => {
                        var color = `#${Math.ceil(Math.random() * 1000000)}`;
                        console.log(color);
                        return <div key={item.url} style={{ "background": color }} onClick={(e) => this.props.onClick(item.url)}>{item.name}</div>
                    })
                }
            </div>
        )
    }
}