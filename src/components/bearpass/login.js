import  React, {Component} from "react";
import "./loginCSS.css"
import Logo from "../../assets/bearpass_logo.png"
import {LoginForm} from "./form/loginForm";
import {Footer} from "../footer/footer";
import {Header} from "../header/header";


export class Login extends Component {
    render() {
        return(
            <div className="container">
                <Header/>
                <div className="head">
                    <img src={Logo} alt={"BearPass Logo"}/>
                </div>
                <LoginForm/>
                <Footer/>
            </div>
        )
    }
}