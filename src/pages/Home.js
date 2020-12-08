
import React from 'react'
import Asesores from '../components/Asesores'
import DescBar from '../components/DescBar'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'


const Home = () => {
     return (
          <div className="container">
               <NavBar/>
               <div className="containerdash">
                    <div className="panelDesarrollos">
                         <h2>PUNTOS DE VENTA</h2>
                         <DescBar/>
                         <Slider/>
                         <Slider/>
                         <Slider/>
                    </div>
                    <div className="panelStats">
                         <div className="asesores">
                              <h2>ASESORES HORAS DE ATENCIÓN</h2>
                              <Asesores/>
                         </div>
                         <div className="chartAnimo">
                              <h2>PROMEDIO ESTADO DE ÁNIMO</h2>
                         </div>
                    </div>
               </div>
               
          </div>
     )
}

export default Home
