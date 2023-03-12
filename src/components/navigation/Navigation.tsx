import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

type Props = {}

export const Navigation = (props: Props) => {
    return (
        <nav className="navigation">
            <Link to="/" className="nav-link">
                home
            </Link>
            <Link to="/about" className="nav-link">
                about
            </Link>
            <Link to="/art" className="nav-link">
                art
            </Link>
            <Link to="/web" className="nav-link">
                dev
            </Link>
        </nav>
    )
}