import React, { Component } from "react";
import "./loginFormCSS.css";

export class LoginForm extends Component {
    render() {
        return (
            <form>
                <div>
                    <input className={"info"} type={"text"} placeholder={"Login"} id={"login"} />
                    <input className={"info"} type={"password"} placeholder={"Password"} id={"password"} />
                    <input value={"Log in"} type={"submit"} id={"submit"} />
                    <span>
            <p>
              <a className={"redLinks"} href="#">Forgot password?</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a className={"redLinks"} href="#">Need help?</a>
            </p>
            <p>
              <a className={"redLinks"} href="#">Activate Your Account</a>
            </p>
            <p>
              <a className={"redLinks"} href="#">Policies and Terms</a>
            </p>
          </span>
                </div>
            </form>
        );
    }
}
