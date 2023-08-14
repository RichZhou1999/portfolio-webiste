import "./Project4.scss"
import analysis_charging_0 from "../../assets/images/analysis_charging_0.png"
import analysis_charging_1 from "../../assets/images/analysis_charging_1.png"
import analysis_charging_2 from "../../assets/images/analysis_charging_2.png"
import analysis_charging_3 from "../../assets/images/analysis_charging_3.png"
import analysis_charging_4 from "../../assets/images/analysis_charging_4.png"
import analysis_charging_5 from "../../assets/images/analysis_charging_5.png"
import ProjectCell from "../ProjectCell/ProjectCell"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import {SiSpringboot} from 'react-icons/si'
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import LaunchIcon from '@mui/icons-material/Launch';
import Button from '@mui/material/Button';

const Project4 = ()=>{

    const project_tasks = [
        {src: analysis_charging_0,
        description:"project components"},
        {src: analysis_charging_1,
        description:"Real charing data"},
        {src: analysis_charging_2,
        description:"Prediction of emission curve with NN"},
        {src: analysis_charging_3,
        description:"Shift charging result"},
        // {src: analysis_charging_4,
        // description:"Task creation and operation"},
        {src: analysis_charging_5,
            description:"Vehicle to grid result"
        }
    ]

    return (<>
        <div className="task_frame">
        <div className="abstract_style"> Analysis and control for emission-based smart EV charging
        {/* <Button startIcon={<LaunchIcon/>} color="primary" target="__blank" href={`http://task-manager-react-app.s3-website-us-west-1.amazonaws.com `}> </Button>   */}
        </div>
        <div className="stack_frame">
        {/* <FontAwesomeIcon icon={faJava} color="brown"/> */}
        <FontAwesomeIcon icon={faPython} color="#5ED4F4" fontSize={30} className='icon_style' style={{margin:"5px"}}/>
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
export default Project4