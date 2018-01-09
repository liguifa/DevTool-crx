import React from "react";
import { Nav } from "../nav";
import { Menu } from "../menu";
import * as actions from "./actions";
import { PropTypes } from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Json } from "../json";
import "./component.css";

export class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isShowMenu: false,
            tool: ""
        }
        this.menus = [
            { type: "devtool-menu-json", url: "devtool-json" },
            [
                { type: "devtool-menu-minetype", url: "#/json" }
            ]
        ]
    }

    render() {
        let Tool = this.getShowToolComponent();
        return (
            <div>
                <Nav onClick={(e) => this.showMenu(e)}></Nav>
                {this.state.isShowMenu ? <Menu onClick={(type) => this.showTool(type)} menus={this.menus}></Menu> : ""}
                {Tool ? <Tool></Tool> : ""}
            </div>
        )
    }

    componentDidMount() {
        this.context.store.subscribe(() => this.stateChanged());
    }

    showMenu() {
        this.context.store.dispatch(actions.showMmenu());
    }

    showTool(type) {
        this.context.store.dispatch(actions.showTool(type));
    }

    stateChanged() {
        let state = this.context.store.getState()["main"];
        this.setState(state);
    }

    getShowToolComponent() {
        switch (this.state.tool) {
            case "devtool-json": return Json;
            default: return false;
        }
    }
}


App.contextTypes = {
    store: PropTypes.object
}