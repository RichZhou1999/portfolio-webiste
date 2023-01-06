import Carousel from "../Carousel/Carousel";
import { useEffect, useState } from "react";
import project_1_src from "../../assets/images/logo1.png"
import project_2_src from "../../assets/images/logo2.png"
import project_3_src from "../../assets/images/logo3.png"
import project_4_src from "../../assets/images/logo4.png"
import "./ProjectList.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";

const ProjectList = ()=>{
    const project_list = [
        {src:project_1_src,
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
        {src:project_2_src,
            start_time:2022.2,
            end_time:2022.3,
            project_name:"Web Application for a library system"},
        {src:project_3_src,
            start_time:2022.9,
            end_time:2022.12,
            project_name:"MovieHub Web Application with recommendation"
        },
        {src:project_4_src,
            start_time:2022.12,
            end_time:2023.1,
            project_name:"Task Manager Web Application"}
    ]
    return (
        <>
        <div className="project_list_div">
            {
               project_list.map((project,i)=>{
                return(
                <div className="one_project_div">
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