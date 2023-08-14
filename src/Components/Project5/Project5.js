import "./Project5.scss"
import acceleration_1 from "../../assets/images/acceleration_1.png"
import acceleration_2 from "../../assets/images/acceleration_2.png"
import acceleration_3 from "../../assets/images/acceleration_3.png"
import acceleration_4 from "../../assets/images/acceleration_4.png"
import ProjectCell from "../ProjectCell/ProjectCell"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";
import {SiSpringboot} from 'react-icons/si'
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import LaunchIcon from '@mui/icons-material/Launch';
import Button from '@mui/material/Button';

const Project5 = ()=>{

    const project_tasks = [
        {src: acceleration_1,
        description:"c++ and python code comparison"},
        {src: acceleration_2,
        description:"OpenMp and serial code comparison"},
        {src: acceleration_3,
        description:"Strong scaling"},
        {src: acceleration_4,
        description:"CUDA results"},
        // {src: analysis_charging_4,
        // description:"Task creation and operation"},
    ]

    return (<>
        <div className="task_frame">
        <div className="abstract_style"> Acceleration of agent-based diffusion model with parallel technics
        {/* <Button startIcon={<LaunchIcon/>} color="primary" target="__blank" href={`http://task-manager-react-app.s3-website-us-west-1.amazonaws.com `}> </Button>   */}
        </div>
        <div className="stack_frame">
        <FontAwesomeIcon icon={faC} color="brown" fontSize={30} className='icon_style' style={{margin:"5px"}}/>
        {/* <FontAwesomeIcon icon={faReact} color="#5ED4F4" fontSize={30} className='icon_style' style={{margin:"5px"}}/> */}
        {/* <FontAwesomeIcon icon={faCss3} color="#28A4D9" fontSize={30} className='icon_style'/> */}
        {/* <FontAwesomeIcon icon={faDatabase} color="#28A4D9" fontSize={30} className='icon_style' style={{margin:"5px"}}/>
        <SiSpringboot fontSize={"30px"} color="lightgreen" style={{margin:"5px"}}/> */}
        </div>
        {
            project_tasks.map((task, i)=>{
                return <ProjectCell 
                src={task.src} 
                description={task.description}
                key={i}/>
            })
        }
        </div>
    </>)    
}
export default Project5