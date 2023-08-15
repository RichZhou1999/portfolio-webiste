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
        
        <div className="library_description">
        As the population of Electric Vehicles (EV) grows, the demand for electricity will increase drastically.
        <br></br>
        For users who decide to charge at home, they often choose to charge the vehicle overnight since that is when the vehicle is not in use. 
        <br>
        </br>
        This presents a problem as emission is the highest during the evening since the energy portfolio during the night lacks the renewable resource from solar energy.
        <br>
        </br>
        In this project, we aim to discover <b>how much emission can be saved </b>by <b>shifting the changing time and controlling the behavior of charging with optimization/RL algorithm</b>.

        </div>
        </div>
        {/* {
            project_tasks.map((task, i)=>{
                return <ProjectCell 
                src={task.src} 
                // description={task.description}
                key={i}/>
            })
        } */}
        <h className="subtitle">Components</h>
        <div>
        <img src={analysis_charging_0} width="60%" style={{margin:"2vh"}}/>
        </div>

        <h className="subtitle">Real charing data</h>
        <div>
        <img src={analysis_charging_1} width="60%" style={{margin:"2vh"}}/>
        </div>


        <h className="subtitle">Prediction of emission curve with NN</h>
        <div>
        <img src={analysis_charging_2} width="60%" style={{margin:"2vh"}}/>
        </div>


        <h className="subtitle">Shift charging result</h>
        <div>
        <img src={analysis_charging_3} width="60%" style={{margin:"2vh"}}/>
        </div>
        <h className="subtitle">Vehicle to grid result</h>
        <div>
        <img src={analysis_charging_4} width="60%" style={{margin:"2vh"}}/>
        </div>
        </div>
    </>)    
}
export default Project4