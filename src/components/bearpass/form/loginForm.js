import React, { Component } from "react";
import "./loginFormCSS.css";

export class LoginForm extends Component {
    render() {
        return (
            <form>
                <div>
                    <input type={"text"} placeholder={"Login"} id={"login"} />
                    <input type={"password"} placeholder={"Password"} id={"password"} />
                    <input value={"Log in"} type={"submit"} id={"submit"} />
                    <span>
            <p>
              <a href="#">Forgot password?</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="#">Need help?</a>
            </p>
            <p>
              <a href="#">Activate Your Account</a>
            </p>
            <p>
              <a href="#">Policies and Terms</a>
            </p>
          </span>
                </div>
            </form>
        );
    }
}
