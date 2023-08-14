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



            <div className="text-zone">
                <h1>
                    About me
                    {/* <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A',"b",'o','u','t'," ","m","e"]}
                    idx={15}
                    /> */}
                </h1> 
                <p>
                My name is Yihua Zhou. Now I am a master's student at UC Berkeley, majoring in systems engineering.<br/>
                I am a self-motivated and diligent person. Also I am keen on coding.
                I always get great joy in the process of coding.
                </p>
                <p>
                I want to make the world different, even just a little, by using my 
                knowlegde and skills. 
                I believe that interest can stimulate power. So I am looking for a specific task that I am interested in and 
                ready to devote myself in the field of tech.
                </p>
                <p>
                I am now looking for a chance working as a machine learning engineer/ software engineer. <br/>
                Feel free to contact me and 
                I am open to any chances.
                </p>

            </div>


            {/* <div className="stage-cube-cont">
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

            </div> */}
        </div>
        </>
    )
}
export default About;