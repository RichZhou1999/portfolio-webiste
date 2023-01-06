import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./About.scss"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";

const About = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    return (
        <>
        <div className="about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A',"b",'o','u','t'," ","m","e"]}
                    idx={15}
                    />
                </h1> 
                <p>
                My name is RRRRRRRRRRRRRRRRRRRRRRRRRRRR
                </p>
                <p>
                My name is RRRRRRRRRRRRRRRRRRRRRRRRRRRR
                </p>
                <p>
                My name is RRRRRRRRRRRRRRRRRRRRRRRRRRRR
                </p>

            </div>
            <div className="stage-cube-cont">
                <h1 >Skills</h1>
                <div className='cubespinner'>
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faPython} color="#5ED4F4"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJava} color="brown"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faC} color="#EC4D2A"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}
export default About;