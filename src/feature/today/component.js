import React from "react";
import { Window } from "../../window";
import "./component.css";

export class Today extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <Window>
                <iframe src="https://www.ipip5.com/today/api.php?type=text"></iframe>
            </Window>
        )
    }
}