import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CardDesarrollo } from "./CardDesarrollo";
import ArrowDown from "./ArrowDown";
import ArrowBack from "./ArrowBack";
import Arrow from "./Arrow";


const data = [
  {
       id: 1,
       name: 'PLUTARCO',
       activo: true,
       personas: 4,
       abierto: true,
       bgcolor: "#00C853"
  },
  {
       id: 2,
       name: 'CUAUHTÉMOC',
       activo: true,
       personas: 0,
       abierto: true,
       bgcolor: "#FF8A01"
  },
  {
       id: 3,
       name: 'CENTENARIO',
       activo: true,
       personas: 0,
       abierto: true,
       bgcolor: "#FF8A01"
  },
  {
       id: 4,
       name: 'CALLE 4',
       activo: true,
       personas: 0,
       abierto: true,
       bgcolor: "#FF8A01"
  },
  {
       id: 5,
       name: 'GRANJAS',
       activo: true,
       personas: 4,
       abierto: true,
       bgcolor: "#FF8A01"
  },
  {
       id: 6,
       name: 'NORTE 25',
       activo: true,
       personas: 0,
       abierto: true,
       bgcolor: "#FF8A01"
  },
  {
       id: 7,
       name: 'CANTERA',
       activo: true,
       personas: 0,
       abierto: true,
       bgcolor: "#FF8A01"
  },
  {
       id: 8,
       name: 'TINTORETO',
       activo: true,
       personas: 0,
       abierto: true,
       bgcolor: "#FF8A01"
  }
]

export default class MultipleItems extends Component {
  render() {
    const settings = {
      
      className: "center",
      infinite: true,
      focusOnSelect: false,
      slidesToShow: 4,
      swipeToSlide: true,
      nextArrow: <Arrow />,
      
      prevArrow: <ArrowBack />,
    };

    
      
      
    return (
      <div className="wrapperSlider">
        
        <Slider {...settings} >
        {data.map(desarrollo=>(
                    
               
                      <CardDesarrollo name={desarrollo.name}  bgcolor={desarrollo.bgcolor} />
                    
                  
                         
                          
                 ))
                 
                 }
        </Slider>
      </div>
    );
  }
}