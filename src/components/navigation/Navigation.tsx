import React from "react";
import { Link, To, useMatch, useParams, useResolvedPath } from "react-router-dom";
import "./Navigation.css"

type Props = {}

export const Navigation = (to: To, props: Props) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    console.log(resolvedPath.pathname)
    if (resolvedPath.pathname == "/about") {
        return (
            <nav className="navigation">
                <Link to="/" className="nav-link">
                    home
                </Link>
                <Link to="/work" className="nav-link">
                    work
                </Link>
            </nav>
        )
    } else if (resolvedPath.pathname == "/work") {
        return (
            <nav className="navigation">
                <Link to="/about" className="nav-link">
                    about
                </Link>
                <Link to="/" className="nav-link">
                    home
                </Link>
            </nav>
        )
    } else {
        return (
            <nav className="navigation">
                <Link to="/about" className="nav-link">
                    about
                </Link>
                <Link to="/work" className="nav-link">
                    work
                </Link>
            </nav>
        )
    } 
}