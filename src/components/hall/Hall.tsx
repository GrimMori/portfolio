import React from "react";
import "./Hall.css"
import logo from "../../assets/images/grim-mori-logo.png"
import { Link } from "react-router-dom";
import github from "../../assets/images/githublogo.svg"
import itch from "../../assets/images/itchiologo.svg"
import youtube from "../../assets/images/youtubelogo.png"
import ItchioIcon from "../../assets/images/ItchioIcon"
import GithubIcon from "../../assets/images/GithubIcon"
import YoutubeIcon from "../../assets/images/YoutubeIcon"


type Props = {}

export const Hall = (props: Props) => {
    return (
        <div className="hall-main">
            <img src={logo} alt="grim mori"/>
            <p>artist and developer</p>
            <nav>
                <Link to="https://github.com/GrimMori" className="githublogo" target="_blank" rel="noopener">
                    <GithubIcon />
                </Link>
                <Link to="https://morithegrim.itch.io/" className="itchiologo" target="_blank" rel="noopener">
                    <ItchioIcon />
                </Link>
                <Link to="https://www.youtube.com/@morithegrim" className="youtubelogo" target="_blank" rel="noopener">
                    <YoutubeIcon />
                </Link>
            </nav>
        </div>
    )
}