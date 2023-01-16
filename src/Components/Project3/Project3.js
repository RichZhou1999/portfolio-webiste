import "./Project3.scss"
import EV0 from "../../assets/images/EV-0.png"
import EV1 from "../../assets/images/EV-1.png"
import EV2 from "../../assets/images/EV-2.png"
import EV3 from "../../assets/images/EV-3.png"
import table from "../../assets/images/table.png"
import bootstrap from "../../assets/images/bootstrap.png"
import ProjectCell from "../ProjectCell/ProjectCell"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faFlask } from "@fortawesome/free-solid-svg-icons"
import {SiFlask} from 'react-icons/si'
import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';

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
        <div className="abstract_style"> Prediction of EV Adoption with ML model
        <Button startIcon={<LaunchIcon/>} color="primary" target="__blank" href={`https://github.com/RichZhou1999/IEOR142-EV-registration-prediction`}> </Button>  
        </div>
        <div className="stack_frame">
        <FontAwesomeIcon icon={faPython} color="#5ED4F4" fontSize={30} className='icon_style' style={{margin:"5px"}}/>
        {/* <FontAwesomeIcon icon={faDatabase} color="#5ED4F4" fontSize={30} className='icon_style' style={{margin:"5px"}}/> */}
        {/* <SiFlask fontSize={"30px"} color="lightgreen" style={{margin:"5px"}}/> */}
        </div>
        <div className="library_description">

        This project aims to use empirical history data to predict adoption of electric vehicles with various machine learning models including  
        <b> Linear regression, </b> <b> Regression Tree, </b>
        <b> Random Forest, </b>
        <b> and Boosting </b>
        <br></br>

        Considering that the increment of EV registration is largely related to economic and social-network factors.
        People with more money and have more friends own EVs are more likey to purchase a EV.
        <br></br>
        We also utilized a <b> Agent-based Bass Diffusion Model </b>to make the prediction which can offer perfect predictions both spatially and 
        temporily.
        <br></br>
        <br></br>
        <h>Data Gathering</h>
        <br></br>
        In terms of data gathering, we choose the vehicle registration data from the gov website to be the dependent variable.
        <br></br>
        For independent varible, we collected data of income, household size, EV charge station and house price from various sources to form
        our own dataset.
        <br></br>

        <br></br>
        <h>Results</h>
        <br></br>
        Following table is our trained result with the metric of OSR2. 
        <br></br>
        <img src={table} width="80%" style={{margin:"2vh"}}/>
        <br></br>
        <br></br>
        We also used the method of bootstrap to show the confidence interval of our models.
        <br></br>
        <img src={bootstrap} width="80%" style={{margin:"2vh"}}/>
        <br></br>


        {/* <br></br>
        <img src={EV0} width="80%" style={{margin:"2vh"}}/>
        <br></br> */}

        <br></br>
        <h>Time Series Prediction</h>
        <br></br>

        To make time series prediction, we utilized the agent-based diffusion model with built-in social network. 
        <br></br>
        We trained two paramters of our model,representing the influence of income and friends respectively, with the method of ramdom search.
        <br></br>
        <img src={EV1} width="80%" style={{margin:"2vh"}}/>
        <br></br>
        In time series, our model can make the prediction with 1% of error.

        <br></br>
        <img src={EV2} width="80%" style={{margin:"2vh"}}/>
        <br></br>
        In the scope of space, the result of prediction(right) is perfectly consistent with  with the empirical data(left).
        
        <br></br>
        <img src={EV3} width="80%" style={{margin:"2vh"}}/>
        <br></br>
        We also predict that in the middle of 2027, the penetration of EV prediction of WA will reach 5%.  

        {/* <img className="cell_img" src={src} /> */}


        {/* Developed a library management system using Python, Flask, and MySQL. <br/>
        Implemented RESTful APIs to handle GET/POST requests to daily operations and store records inside the MySQL database.<br/>
        Implemented an authentication system with refresh tokens and email login confirmations using Mailgun.<br/>
        Test with Postman and deploy the Flask application on Heroku */}
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