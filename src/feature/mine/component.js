import React from "react";
import { mineTypes } from "./mineTypes";
import { Window } from "../../window";
import "./component.css";

export class Mine extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <Window onClick={(type) => this.props.onClick(type)}>
                <div className="devtool-mine-content-table">
                    <table>
                        <thead>
                            <tr><th></th><th>扩展文件名</th><th>mine类型</th></tr>
                        </thead>
                        <tbody>
                            {
                                mineTypes.map((mine, index) => {
                                    return <tr key={mine.name}><td>{index}</td><td>{mine.name}</td><td>{mine.value}</td></tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Window>
        )
    }
}