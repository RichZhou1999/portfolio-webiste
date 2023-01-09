import { Link, NavLink } from "react-router-dom"
import "./Sidebar.scss"
import LogoS from "../../assets/images/logo-s.png"
import Logo from "../../assets/images/logo.jpeg"
import LogoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome, faTasks, faUser } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Sidebar = ()=>{
    return(
        <>
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={Logo} alt="logo"/>
                <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon = {faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/about" className="about-link">
                    <FontAwesomeIcon icon = {faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/project" className="project-link">
                    <FontAwesomeIcon icon = {faTasks} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
                    <FontAwesomeIcon icon = {faEnvelope} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <ul>
            <li>
                <a target="_blank" rel="noreferrer"
                href= "https://www.linkedin.com/in/yihua-zhou-982b05248/">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer"
                href= "https://github.com/RichZhou1999">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>

            </ul>
        </div>
        </>
    )
}
export default Sidebar