import Carousel from "../Carousel/Carousel";
import React, { useEffect, useState } from "react";
import sca_icon from "../../assets/images/sca_icon.png"
import movie_icon from "../../assets/images/movie_icon.jpeg"
import book_icon from "../../assets/images/book_icon.jpeg"
import EV_icon from "../../assets/images/EV_icon.png"
import task_manager_icon from "../../assets/images/task_manager-icon.jpeg"
import project_1_src from "../../assets/images/logo1.png"
import project_2_src from "../../assets/images/logo2.png"
import project_3_src from "../../assets/images/logo3.png"
import project_4_src from "../../assets/images/logo4.png"
import "./ProjectList.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from 'react-router-dom';


const ProjectList = ()=>{
    const navigate = useNavigate()
    const [selection, setSelection]  = React.useState(-1)
    React.useEffect(()=>{
        if(selection!=-1){
            const temp = selection + 1
            // console.log(`/project${temp}`)
            navigate(`/project${temp}`)
        }
    },[selection])


    const project_list = [
        {src:sca_icon,
        start_time:2020.1,
        end_time:2022.1,
        project_name:"conceptual analyzer for structural mechanics",
        icons:[{
            icon_type:{faPython},
            color:"#5ED4F4"
        },
        {   icon_type:faReact,
            color:"#5ED4F4"  
        }
    ]},
    {src: movie_icon,
        start_time:2022.9,
        end_time:2022.12,
        project_name:"MovieHub Web Application with recommendation"
    },
        {src: EV_icon,
            start_time:2022.9,
            end_time:2022.12,
            project_name:"Prediction of EV Adoption with ML model"},
        {src:task_manager_icon,
            start_time:2022.2,
            end_time:2022.4,
            project_name:"Task Manager Web Application"}
    ]
    return (
        <>
        <div className="project_list_div">
            {
               project_list.map((project,i)=>{
                const handleClick=()=>{
                    setSelection(i)
                    console.log("123")
                }
                return(
                <div className="one_project_div" onClick={(e)=>{handleClick()}}>
                <img className="item_img" src={project.src} role="presentation" />
                <b> {project.project_name}
                <br/>
                    {project.start_time} -&gt; {project.end_time} 
                <br/>
                {/* {project.icons} ? 
                <div>123</div> : <></> */}
                {/* <FontAwesomeIcon icon={faPython} color="#5ED4F4" fontSize={20}/> */}
                </b>
            
                </div>)
               })
            }
        </div>
        </>
    )
}
export default ProjectList;