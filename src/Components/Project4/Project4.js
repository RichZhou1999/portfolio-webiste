import "./Project4.scss"
import task_manager_1 from "../../assets/images/task_manager_1.png"
import task_manager_2 from "../../assets/images/task_manager_2.png"
import task_manager_3 from "../../assets/images/task_manager_3.png"
import task_manager_4 from "../../assets/images/task_manager_4.png"
import task_manager_5 from "../../assets/images/task_manager_5.png"
import ProjectCell from "../ProjectCell/ProjectCell"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import {SiSpringboot} from 'react-icons/si'
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
const Project4 = ()=>{

    const project_tasks = [
        {src: task_manager_1,
        description:"log in and sign up"},
        {src: task_manager_2,
        description:"choice page & portrait upload"},
        {src: task_manager_3,
        description:"load and navigation page"},
        {src: task_manager_4,
        description:"Task creation and operation"},
    ]

    return (<>
        <div className="task_frame">
        <div className="abstract_style"> Task Manager</div>
        <div className="stack_frame">
        <FontAwesomeIcon icon={faJava} color="brown"/>
        <FontAwesomeIcon icon={faReact} color="#5ED4F4" fontSize={30} className='icon_style' style={{margin:"5px"}}/>
        {/* <FontAwesomeIcon icon={faCss3} color="#28A4D9" fontSize={30} className='icon_style'/> */}
        <FontAwesomeIcon icon={faDatabase} color="#28A4D9" fontSize={30} className='icon_style' style={{margin:"5px"}}/>
        <SiSpringboot fontSize={"30px"} color="lightgreen" style={{margin:"5px"}}/>
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