import "./Project3.scss"
import moviehub1 from "../../assets/images/moviehub1.png"
import moviehub2 from "../../assets/images/moviehub2.png"
import moviehub3 from "../../assets/images/moviehub3.png"
import moviehub4 from "../../assets/images/moviehub4.png"
import ProjectCell from "../ProjectCell/ProjectCell"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faFlask } from "@fortawesome/free-solid-svg-icons"
import {SiFlask} from 'react-icons/si'

const Project3 = ()=>{

    // const project_tasks = [
    //     {src: moviehub1,
    //     description:"movie with genre selection"},
    //     {src: moviehub2,
    //     description:"movie pages with trending"},
    //     {src: moviehub3,
    //     description:"content-based recommendation"},
    //     {src: moviehub4,
    //     description:"Search movie according to keywords"},
    // ]

    return (<>
        <div className="task_frame">
        <div className="abstract_style"> Libaray System</div>
        <div className="stack_frame">
        <FontAwesomeIcon icon={faPython} color="#5ED4F4" fontSize={30} className='icon_style' style={{margin:"5px"}}/>
        <FontAwesomeIcon icon={faDatabase} color="#5ED4F4" fontSize={30} className='icon_style' style={{margin:"5px"}}/>
        <SiFlask fontSize={"30px"} color="lightgreen" style={{margin:"5px"}}/>
        </div>
        <div className="library_description">
        Developed a library management system using Python, Flask, and MySQL. 
        Implemented RESTful APIs to handle GET/POST requests to daily operations and store records inside the MySQL database.
        Implemented an authentication system with refresh tokens and email login confirmations using Mailgun.
        Test with Postman and deploy the Flask application on Heroku
        </div>
        {/* {
            project_tasks.map((task, i)=>{
                return <ProjectCell 
                src={task.src} 
                description={task.description}
                key={i}/>
            })
        } */}
        </div>
    </>)    
}
export default Project3