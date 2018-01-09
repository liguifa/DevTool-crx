import React from "react";
import "./component.css";

export class Json extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            data: new Map()
        }
    }

    render() {
        var jsonData = [<div key={0}><span></span></div>];
        this.state.data.forEach((item, key) => {
            jsonData.push(<div key={key}><span>{key}</span> <span> : </span> <span>{item}</span></div>)
        });
        jsonData.push(<div key={1}><span></span></div>);
        return (
            <div className="devtool-json">
                <div className="devtool-json-title">
                    <div className="devtool-json-title-img"></div>
                    <span>Json小工具</span>
                </div>
                <div className="divtool-json-content">
                    <div className="textarea" contenteditable="true" ref="input">text
                        {jsonData}
                    </div>
                    <div className="divtool-json-content-btn">
                        <button onClick={(e) => this.format()}>格式化</button>
                    </div>
                </div>
            </div>
        )
    }

    format() {
        let obj = JSON.parse(this.refs.input.innerText);
        this.refs.input.innerText = "";
        let map = new Map();
        for (let key in obj) {
            map.set(key, obj[key]);
        }
        this.setState({ data: map });
    }
}