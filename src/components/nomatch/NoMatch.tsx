import React from "react";
import { Link } from "react-router-dom";
import "./NoMatch.css"

type Props = {}

export const NoMatch = (props: Props) => {
    return (
        <div className="nomatch-main">
            error 404: you have found the unknown.
            <Link to="/" className="nav-link">Go back home</Link>
        </div>
    )
}