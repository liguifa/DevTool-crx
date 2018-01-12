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

    format(srcObject, srcIndex) {
        if (srcObject === null || (srcObject === undefined && srcIndex)) {
            return `<span style="color:#0000FF;">null</span>`;
        }
        let jsonObject = srcObject || JSON.parse(this.refs.input.innerText);
        // let data = json.replace(/\s|\\n|\\r/g, "")
        //     .replace(/'/g, "\"")
        //     .replace(/}/g, "<br />}")
        //     .replace(/{/g, "{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
        //     .replace(/,/g, ",<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
        //     .replace(/:/g, " : ");
        let index = srcIndex || 0;
        let html = `<span><span style='margin:0px;color:#00AA00;'>{</span><div style="margin-left:${index * 2}em;border-left: 1px #e2e2e2 dotted;">`;
        let keyIndex = 0;
        for (let key in jsonObject) {
            keyIndex++;
            let dot = keyIndex === Object.keys(jsonObject).length ? "" : "<span>,</span>";
            if (typeof jsonObject[key] === "object" && jsonObject[key] && jsonObject[key] != null && jsonObject[key].length != undefined) {
                let arrayValue = `<br /><div style='margin:0px;margin-left:${index * 2 + 2}em;display: inline-block;color:#0033FF;'>[</div>`;
                let arrayIndex = 0;
                for (var arrayKey in jsonObject[key]) {
                    arrayIndex++;
                    let arrayDot = arrayIndex === Object.keys(jsonObject[key]).length ? "" : "<span>,</span>";
                    if (typeof jsonObject[key][arrayKey] === "string") {
                        arrayValue += `<div style='text-indent:${index * 2 + 6}em;margin:0px;'>&nbsp;&nbsp;"${jsonObject[key][arrayKey]}"${arrayDot}</div>`;
                    } else {
                        arrayValue += this.format(jsonObject[key][arrayKey], index + 2);
                        if (arrayIndex === Object.keys(jsonObject[key]).length) {
                            arrayValue = arrayValue.substr(0, arrayValue.length - "<span>,</span>".length);
                        }
                    }
                }
                arrayValue += `<span style="color:#0033FF;">]</span>`;
                html += `<div style='text-indent:${index * 2 + 2}em;margin:0px;'>
                            <span style='color:#CC0000;'>"${key}"</span><span>&nbsp;&nbsp;:&nbsp;&nbsp;</span><span>${arrayValue}</span>${dot}
                         </div>`;
            } else if (typeof jsonObject[key] === "object") {
                html += `<div style='text-indent:${index * 2 + 2}em;margin:0px;'>
                            <span style='color:#CC0000;'>"${key}"</span><span>&nbsp;&nbsp;:&nbsp;&nbsp;</span><span>${this.format(jsonObject[key], index + 1)}</span>${dot}
                         </div>`;
            } else if (typeof jsonObject[key] === "string") {
                html += `<div style='text-indent:${index * 2 + 2}em;margin:0px;'>
                            <span style='color:#CC0000;'>"${key}"</span><span>&nbsp;&nbsp;:&nbsp;&nbsp;</span><span style="color:#007777;">"${jsonObject[key]}"</span>${dot}
                         </div>`;
            } else if (typeof jsonObject[key] === "boolean") {
                html += `<div style='text-indent:${index * 2 + 2}em;margin:0px;'>
                            <span style='color:#CC0000;'>"${key}"</span><span>&nbsp;&nbsp;:&nbsp;&nbsp;</span><span style="color:#AA00AA;">${jsonObject[key]}</span>${dot}
                         </div>`;
            } else if (typeof jsonObject[key] === "number") {
                html += `<div style='text-indent:${index * 2 + 2}em;margin:0px;'>
                            <span style='color:#CC0000;'>"${key}"</span><span>&nbsp;&nbsp;:&nbsp;&nbsp;</span><span style="color:#0000FF;">${jsonObject[key]}</span>${dot}
                         </div>`;
            }
        }
        html += `</div><span style='margin:0px;margin-left:${index * 2}em;color:#00AA00;'>}</span></span><span>,</span>`;
        if (srcObject != undefined) {
            return html;
        }
        html = html.substr(0, html.length - "<span>,</span>".length);
        this.setState({ data: html });
    }
}