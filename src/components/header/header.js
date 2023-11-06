import React, {Component} from "react";
import "./headerCSS.css"
import Logo from "../../assets/msu_logo.png"

export class Header extends Component {
    render() {
        return (
            <header>
                <img src={Logo} alt={"msu logo"}/>
            </header>
        )
    }
}