import React from 'react'
import Slider from 'react-slick'
import VideocamIcon  from '@material-ui/icons/Videocam';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const data = [
     {
          id: 1,
          name: 'PLUTARCO',
          activo: true,
          personas: 4,
          abierto: true,
     },
     {
          id: 2,
          name: 'PLUTARCO',
          activo: true,
          personas: 0,
          abierto: true,
     },
     {
          id: 3,
          name: 'PLUTARCO',
          activo: true,
          personas: 0,
          abierto: true,
     },
     {
          id: 4,
          name: 'PLUTARCO',
          activo: true,
          personas: 0,
          abierto: true,
     },
     {
          id: 5,
          name: 'PLUTARCO',
          activo: true,
          personas: 4,
          abierto: true,
     },
     {
          id: 6,
          name: 'PLUTARCO',
          activo: true,
          personas: 0,
          abierto: true,
     },
     {
          id: 7,
          name: 'PLUTARCO',
          activo: true,
          personas: 0,
          abierto: true,
     },
     {
          id: 8,
          name: 'PLUTARCO',
          activo: true,
          personas: 0,
          abierto: true,
     }
]



const SliderHome = () => {
     
    
          const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
          }
             return (
               <div className="containerSlider">
                 
                 <Slider {...settings}>
                 {data.map(desarrollo=>(
                          
                          <div className="slide-content">
                               <h2>{desarrollo.name}</h2>
                               <div className="supervisor">
                                    <div className="title">
                                       <h4>SUPERVISOR DIGITAL</h4>  
                                    </div>
                                    
                                    <div className="iconCam">
                                         <VideocamIcon width={28}/>
                                         <p>Activo</p>
                                    </div>
                               </div>
                               <div className="persons">
                                    <div className="title">
                                       <h4><span>4</span> personas</h4>
                                    </div>
                                    
                                    <div className="iconLocation">
                                         <LocationOnIcon width={20}/>
                                         <p>Activo</p>
                                    </div>
                               </div>
                               
                               
                               <div className="open">
                                    <p>Abierto</p>
                               </div>
                               
                               
                          </div>
                     
                 ))
                 }
                </Slider> 
               </div>
     )
}

export default SliderHome


