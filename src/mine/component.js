import React from "react";
import { mineTypes } from "./mineTypes";
import "./component.css";

export class Mine extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <div className="devtool-json">
                <div className="devtool-json-title">
                    <div className="devtool-json-title-img"></div>
                    <span>Mine查询</span>
                </div>
                <div className="divtool-json-content">
                    <table>
                        {
                            mineTypes.map((mine, index) => {
                                return <tr><td>{index}</td><td>{mine.name}</td><td>{mine.value}</td></tr>
                            })
                        }
                    </table>
                </div>
            </div>
        )
    }
}