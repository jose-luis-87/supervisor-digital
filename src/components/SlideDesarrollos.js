import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Edificio from './Edificio';
import VideocamIcon  from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { CardDesarrollo } from "./CardDesarrollo";


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

export default class MultipleItems extends Component {
  render() {
    const settings = {
      
      className: "center",
      infinite: true,
      
      slidesToShow: 4,
      swipeToSlide: true,
    };
    return (
      <div className="wrapperSlider">
        
        <Slider {...settings} >
        {data.map(desarrollo=>(
                          
                            <CardDesarrollo name={desarrollo.name}/>
                         
                          
                 ))
                 
                 }
        </Slider>
      </div>
    );
  }
}