
import React from 'react'
import SlideDesarrollos from '../components/SlideDesarrollos'
import VerticalSlide from '../components/VerticalSlide'
import { ChartAnimo } from '../components/ChartAnimo'


import NavBar from '../components/NavBar'
import VerticalSwipeToSlide from '../components/VerticalSlide'
import Daily from '../components/stats/Daily'
import { Stats } from '../components/stats/Stats'




const Desarrollo = () => {

     let _data = [
          {
               label: 'Apertura',
               backgroundColor:"#0C8530",
               pointRadius: 6,
               
               data: [
                   7, 8, 8, 9, 8, 10, 7
               ],
           },

           {
               label: 'Cierre',
               backgroundColor:  "#FF8A01",
               pointRadius: 6,
               
               data: [
                   19, 18, 20, 18, 20, 21, 20
               ],
           }
     ]
    

     return (
          <div className="container">
               <NavBar/>
               <div className="containerdash">
                    <div className="panelDesarrollos">
                         <h2>APERTURA Y CIERRE</h2>
                         <Stats/>
                    </div>
                    <div className="panelStats">
                         <div className="asesores">
                              <div className="titleAsesores">
                                   <h2>ASESORES HORAS DE ATENCIÓN</h2>
                              <div className="labelFilter">
                                   <p>Mejores asesores <span>Últimos 30 días</span></p>
                              </div>
                              </div>
                              <VerticalSlide/>
                         </div>
                         <div className="chartAnimo">
                              <div className="titleAnimo">
                                   <h2>PROMEDIO ESTADO DE ÁNIMO</h2>
                                   <div className="labelAnimo">
                                        <p>Afluencia <span>Últimos 30 días</span></p>
                                   </div>
                              </div>
                              
                              <ChartAnimo/>
                         </div>
                    </div>
               </div>
               
          </div>
     )
}

export default Desarrollo
