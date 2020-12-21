import React, { Component } from "react";
import Slider from "react-slick";

import imgUser from '../img/user.jpg';
import { ProgressBar } from './progressbar/ProgressBar';


const data = [
    {
         id: 1,
         name: 'Gerardo López',
         puntoventa: 'PLUTARCO',
         promedio: 98,
         img: {imgUser},
         bgcolor: "#00C853",
         numeroPersonas: {
              felices: 20,
              neutrales: 24,
              molestas: 8
         }
    },
    {
         id: 2,
         name: 'Eduardo Ruiz',
         puntoventa: 'CENTENARIO',
         promedio: 78,
         img: '../img/user.jpg',
         bgcolor: "#0061B2"
    },
    {
         id: 3,
         name: 'Ana Madrid',
         puntoventa: 'GRANJAS',
         promedio: 68,
         img: '../img/user.jpg',
         bgcolor: "#0061B2"
    },
    {
         id: 4,
         name: 'Álan Castro',
         puntoventa: 'NORTE 25',
         promedio: 45,
         img: '../img/user.jpg',
         bgcolor: "#FF8A01"
    },
    {
         id: 5,
         name: 'Brenda Cloud',
         puntoventa: 'ATLANTA',
         promedio: 45,
         img: '../img/user.jpg',
         bgcolor: "#FF8A01"
    },
    {
         id: 6,
         name: 'Álan Castro',
         puntoventa: 'NORTE 25',
         promedio: 45,
         img: '../img/user.jpg',
         bgcolor: "#FF8A01"
    },
    {
         id: 7,
         name: 'Brenda Cloud',
         puntoventa: 'ATLANTA',
         promedio: 45,
         img: '../img/user.jpg',
         bgcolor: "#FF8A01"
    }
]

export default class VerticalSwipeToSlide extends Component {


     
  render() {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll:1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      focusOnSelect: false,
      
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div className="asesoresContainer">
        
        <Slider {...settings} >
        {data.map(asesor=>(
                         

                         <div>
                         <div className="cardUser">
                              <div className="user">
                                   <div className="avatar">
                                        <img src={imgUser} alt={"avatar"}/>
                                   </div>
                                   <div className="datos">
                                        <h2>{asesor.name}</h2>
                                        <p>{`PV. ${asesor.puntoventa}`}</p>
                                   </div>
                              </div> 
                              <ProgressBar key={asesor.id} bgcolor={asesor.bgcolor} promedio={asesor.promedio}/>
                         </div>
                         </div>
                    
               ))
          }
        </Slider>
      </div>
    );
  }
}