import "./Project1.scss"
import sca_overview from "../../assets/images/sca_overview.png"
import sca_display_area from "../../assets/images/sca_display_area.png"
import sca_report from "../../assets/images/sca_report.png"
import sca_question_bank from "../../assets/images/sca_question_bank.png"
import sca_question_creation from "../../assets/images/sca_question_creation.png"
import sca_answer_video from "../../assets/images/draw.mp4"
import ProjectCell from "../ProjectCell/ProjectCell"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import React, { useRef} from 'react'
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import {SiSpringboot} from 'react-icons/si'
import LaunchIcon from '@mui/icons-material/Launch';
import { faLink } from "@fortawesome/free-solid-svg-icons"
import Button from '@mui/material/Button';

const Project1 = ()=>{

    const project_tasks = [
        {src: sca_overview,
        description:"main features of this software"},
        {src: sca_display_area,
        description:"display area for showing the question"},
    ]

    const project_tasks2 = [
        {src: sca_question_creation,
            description:"Creat DIY questions"},
        {src: sca_question_bank,
            description:"online shared question bank"},
        {src: sca_report,
            description:"report of previosly done questions"},
    ]

    const vidRef = useRef(null);
    const handlePlayVideo = () => {
    vidRef.current.play();
    }

    
    return (<>
        <div className="task_frame">
        <div className="abstract_style"> Conceptual Analyzer for Structural Mechanics
        <Button startIcon={<LaunchIcon/>} color="primary" target="__blank" href={`https://drive.google.com/file/d/1x_qr05i3qlSTEeRMyGrPCULOfUeHWSbe/view?usp=share_link`}> </Button>  
</div>

        <div style={{color:"white"}}>A software dedicated to training the ability of conceptual analysis in structural mechanics</div>
        <div className="stack_frame">
        <FontAwesomeIcon icon={faPython} color="#5ED4F4" fontSize={30} className='icon_style' style={{margin:"5px"}}/>
        {/* <FontAwesomeIcon icon={faReact} color="#5ED4F4" fontSize={30} className='icon_style'/> */}
        <FontAwesomeIcon icon={faDatabase} color="#28A4D9" fontSize={30} className='icon_style' style={{margin:"5px"}}/>
        {/* <SiSpringboot fontSize={"30px"} color="lightgreen"/> */}
        </div>
        {
            project_tasks.map((task, i)=>{
                return <ProjectCell 
                src={task.src} 
                description={task.description}
                key={i}/>
            })
        }
        <div className="video_frame">
        <video ref={vidRef} controls width="500px">
        <source src={sca_answer_video} type="video/mp4" />
        </video>
        <div style={{color:"white",fontSize:"20px"}}>interactive answer process</div>
        </div>
        {
            project_tasks2.map((task, i)=>{
                return <ProjectCell 
                src={task.src} 
                description={task.description}
                key={i}/>
            })
        }
        </div>
    </>)    
}
export default Project1