import React from "react";
import { Window } from "../../window";
import "./component.css";

export class Json extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            data: ""
        }
    }

    render() {
        return (
            <Window onClick={(type) => this.props.onClick(type)}>
                <div className="textarea" contentEditable={true} ref="input" dangerouslySetInnerHTML={{ __html: this.state.data }}>
                </div>
                <div className="devtool-json-content-btn">
                    <button onClick={(e) => this.format()}>格式化</button>
                </div>
            </Window>
        )
    }

    format() {
        let json = JSON.stringify(JSON.parse(this.refs.input.innerText));
        let data = json.replace(/\s|\\n|\\r/g, "")
            .replace(/'/g, "\"")
            .replace(/}/g, "<br />}")
            .replace(/{/g, "{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
            .replace(/,/g, ",<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
            .replace(/:/g, " : ");
        this.setState({ data: data });
    }
}