import React from "react";
import { Window } from "../../window";

export class Date extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <Window onClick={(type) => this.props.onClick(type)}>
                
            </Window>
        )
    }
}