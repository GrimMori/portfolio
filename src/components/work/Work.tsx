import React from "react";
import "./Work.css"
import Projects from "../Projects";

type Props = {}

export const Work = (props: Props) => {
    return (
        <div className="work-main">
            <h1>my work</h1>
            <Projects />
        </div>
    )
}