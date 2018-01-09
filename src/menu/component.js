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
                <div className="devtool-menu-item devtool-menu-one">
                    <div onClick={(e) => this.props.onClick(this.props.menus[0].url)} className={this.props.menus[0].type}></div>
                </div>
                <div className="devtool-menu-item devtool-menu-two">
                    {
                        this.props.menus[1].map(item => {
                            return <div key={item.url} className={item.type}></div>
                        })
                    }
                </div>
            </div>
        )
    }
}