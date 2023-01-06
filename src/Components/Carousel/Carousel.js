import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import project_1_src from "../../assets/images/logo1.png"
import project_2_src from "../../assets/images/logo2.png"
import project_3_src from "../../assets/images/logo3.png"
import project_4_src from "../../assets/images/logo4.png"
import "./Carousel.scss"


const handleDragStart = (e) => e.preventDefault();

const project_list = [
    {src:project_1_src,
    start_time:2021,
    end_time:2022},
    {src:project_2_src,
        start_time:2019,
        end_time:2020},
    {src:project_3_src,
        start_time:2018,
        end_time:2022},
    {src:project_4_src,
        start_time:2017,
        end_time:2022}
]
const items = project_list.map((project,i)=>{
    return(<>
    <div className='item_div'>
    <img className="item_img" src={project.src} onDragStart={handleDragStart} role="presentation" />
    <b>{project.start_time}</b>
    </div>
    </>)
})
// const items = [
//   <div className="item_div"><img src={project_1} onDragStart={handleDragStart} role="presentation" />
//   <b>2022</b>
//   </div>,
//   <div><img src={project_2} onDragStart={handleDragStart} role="presentation" /></div>,
//   <div><img src={project_3} onDragStart={handleDragStart} role="presentation" /></div>,
// ];

const Carousel = () => {
  return (
    <>
    <div className="Carousel_div">
    <AliceCarousel infinite disableDotsControls
    mouseTracking animationDuration={3000}
    items={items} 
    autoWidth
    autoHeight
    autoPlay/>
    </div>
    </>
  );
}

export default Carousel;