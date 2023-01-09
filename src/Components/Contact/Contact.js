import "./Contact.scss"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import { useEffect, useState, useRef} from "react"
import emailjs from "@emailjs/browser"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
const Contact = ()=>{

    const refForm = useRef()
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect (()=>{
        setTimeout(()=>{
            setLetterClass("text-animate-hover")
        },4000)
    },[])
    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs
        .sendForm(
            "service_uvhuvrg",
            "template_3gvm9qs",
            refForm.current,
            "PzATsFJsdpiVJYTlr"
        ) 
        .then((result) => {
            alert("Message successful sent! ");
            window.location.reload(false)
        }, (error) => {
            alert("Failed to send the message! ");
            console.log(error.text)
        });
    }
    const position =[27.2046,77.4977] 
    return (
    <>
    <div className="contact-page">
        <div className="text-zone">
            <h1>
            <AnimatedLetters 
            letterClass={letterClass}
            strArray={['C',"o","n","t","a","c","t"," ","m","e"]}
            idx={15}/>
            </h1>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input type="text" name="name" placeholder="Name" required/>
                        </li>
                        <li className="half">
                            <input type="email" name="email" placeholder="Email" required/>
                        </li>
                        <li>
                            <input type="subject" name="subject" placeholder="Subject" required/>
                        </li>
                        <li>
                            <textarea placeholder="Message" name="message" required></textarea>
                        </li>
                        <li>
                        <input type="submit" className="flat-button" value="SEND" />
                        </li>

                    </ul>

                </form>

            </div>
        </div> 
        <div className="info-map">
            US,California
            <br/>
            Berkeley,1797 shattuck ave
            <span>yihua_zhou@berkeley.edu</span>
        </div>
        {/* <div className='map-wrap'>
            <MapContainer center={[37.8751,-122.269]} zoom={30}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
                <Marker position={[37.8751,-122.269]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
        </div> */}
    </div>
    <Loader type="pacman" />
    </>)
}
export default Contact;