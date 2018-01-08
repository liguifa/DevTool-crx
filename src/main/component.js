import React from "react";
import { Nav } from "../nav";
import { Menu } from "../menu";
import * as actions from "./actions";
import { PropTypes } from "prop-types";

export class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isMenu: false
        }
    }

    render() {
        return (
            <div>
                <Nav onClick={(e) => this.showMenu(e)}></Nav>
                {this.state.isMenu ? <Menu></Menu> : ""}
            </div>
        )
    }

    showMenu() {
        this.context.store.dispatch(actions.showMmenu());
    }
}


App.contextTypes = {
    store: PropTypes.object
}