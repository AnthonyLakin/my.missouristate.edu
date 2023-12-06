import React, {Component} from "react";
import "./landingPageCSS.css"
import MSULogo from "../../assets/MSU_Logo_Full-modified.png"
import BbLogo from "../../assets/Bb_learn_small.png"
import Bb2Logo from "../../assets/Bb_Signature_StdMed.png"

export class LandingPage extends Component {
    render() {
        return(
            <div className="parent">
                <img id={"msuLogo"} src={MSULogo} alt={"MSU Logo"}/>
                <img id={"blackBoard"} src={BbLogo} alt={"Blackboard Logo"}/>
                <h3>Please select from the following login options:</h3>
                <button onClick={event =>  window.location.href='/bearpass'} id={"submit"}>Missouri State University Bearpass</button>
                <a className={"redLinks"} href="#">Blackboard Learn Guest Account</a>
                <div className={"card"}>
                    <h4>STUDENTS: Course Availability</h4>
                    <p>Instructors choose when to make Blackboard courses available or unavailable to students. Please contact your instructor to find out when they plan to make a course available or unavailable.</p>
                </div>
                <div id={"foot"}>
                    <img id={"blackBoard2"} src={Bb2Logo} alt={"Blackboard Logo"}/>
                <p>© 1997-2023 Blackboard Inc. All Rights Reserved. U.S. Patent No. 7,493,396 and 7,558,853. Additional Patents Pending.
                 </p>
                    <a className={"redLinks"} href="#">Accessibility information</a>
                </div>
            </div>

        )
    }
}