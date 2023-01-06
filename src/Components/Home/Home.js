import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Home.scss"

const Home = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ["Y","i","h","u","a","", "Z","h","o","u"]
    const schoolArray = ["U","C","","B","e","r","k","l","e","y"]
    const majorArray = ["S","y","s","t","e","m","","E","n","g","i","n","e","e","r","i","n","g"]
    useEffect (()=>{
        setTimeout(()=>{
            setLetterClass("text-animate-hover")
        },4000)
    },[])
    return (
        <>
        <div className="home-page">
        <div className="text-zone">
            <h1>Hi, <br/> I'm
            <AnimatedLetters letterClass={letterClass} 
            strArray={nameArray}
            idx={15}/>
             <br/>
             <AnimatedLetters letterClass={letterClass} 
            strArray={schoolArray}
            idx={22}/>
             <br/>
             </h1>
             <h2>System Engineering</h2>
             <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
        </div>
        </>
    )
}
export default Home;