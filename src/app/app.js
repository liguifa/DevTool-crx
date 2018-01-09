import React from "react";
import {Nav} from "./nav";

export default class App extends React.Component {
    constructor() {
        super(...args);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Nav></Nav>
            </div>
        )
    }
}