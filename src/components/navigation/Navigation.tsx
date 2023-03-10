import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

type Props = {}

export const Navigation = (props: Props) => {
    return (
        <nav className="navigation">
            <Link to="/" className="nav-link">
                Home
            </Link>
            <Link to="/about" className="nav-link">
                About
            </Link>
            <Link to="/art" className="nav-link">
                Art
            </Link>
            <Link to="/web" className="nav-link">
                Web
            </Link>
        </nav>
    )
}