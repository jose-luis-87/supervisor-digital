import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import Edificio from './Edificio';
import VideocamIcon  from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
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

function Slider() {
     return (
          <Swiper
               className="slider"
               spaceBetween={20}
               slidesPerView={4.5}
               navigation
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)
               }
          >
          {data.map(desarrollo=>(
                    <SwiperSlide key={desarrollo.name} className="slide">
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
                              <Edificio width={170} opacity={0.2} className="edificio"/>
                              
                         </div>
                    </SwiperSlide>
               ))
          }
          </Swiper>
     )
}

export default Slider
