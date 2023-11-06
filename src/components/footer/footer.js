import React, { Component } from "react";
import "./footerCSS.css";
import FootLogo from "../../assets/footer_logo.png";

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div className={"moto"}>
                    <img alt={"Footer Logo"} src={FootLogo} />
                </div>
                <div className="contact">
          <span>
              <div>
            <a href="#">Accessibility</a>
            <a href="#">Disclaimer</a>
            <a href="#">Disclosures</a>
            <a href="#">
              EO/AA/M/F/Veterans/Disability/Sexual Orientation/Gender Identity
            </a>
            <a href="#">Safety and Emergency Services</a>
              </div>
              <div>
                  <p>© 2013&nbsp;<a href="#">Board of Governors,</a>&nbsp;Missouri State University</p>
            <a href="#">Contact Information</a>
            <a href="#">Accessibility</a>
                  </div>
          </span>
                </div>
            </footer>
        );
    }
}
