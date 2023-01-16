import "./Project2.scss"
import moviehub1 from "../../assets/images/moviehub1.png"
import moviehub2 from "../../assets/images/moviehub2.png"
import moviehub3 from "../../assets/images/moviehub3.png"
import moviehub4 from "../../assets/images/moviehub4.png"
import ProjectCell from "../ProjectCell/ProjectCell"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import LaunchIcon from '@mui/icons-material/Launch';
import { faLink } from "@fortawesome/free-solid-svg-icons"
import Button from '@mui/material/Button';


const Project2 = ()=>{

    const project_tasks = [
        {src: moviehub1,
        description:"movie with genre selection"},
        {src: moviehub2,
        description:"movie pages with trending"},
        {src: moviehub3,
        description:"content-based recommendation"},
        {src: moviehub4,
        description:"Search movie according to keywords"},
    ]

    return (<>
        <div className="task_frame">
        <div className="abstract_style"> Movie Hub
        <Button startIcon={<LaunchIcon/>} color="primary" target="__blank" href={`http://moviehub-recommend.s3-website-us-west-1.amazonaws.com`}> </Button>  
        </div>
        <div className="stack_frame">
        <FontAwesomeIcon icon={faPython} color="#5ED4F4" fontSize={30} className='icon_style' style={{margin:"5px"}}/>
        <FontAwesomeIcon icon={faReact} color="#5ED4F4" fontSize={30} className='icon_style' style={{margin:"5px"}}/>
        <FontAwesomeIcon icon={faCss3} color="#28A4D9" fontSize={30} className='icon_style' style={{margin:"5px"}}/>
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
export default Project2