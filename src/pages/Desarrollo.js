
import React from 'react'
import SlideDesarrollos from '../components/SlideDesarrollos'
import VerticalSlide from '../components/VerticalSlide'
import { ChartAnimo } from '../components/ChartAnimo'

import Customdropdown from '../components/Customdropdown'
import DescBar from '../components/DescBar'
import NavBar from '../components/NavBar'
import VerticalSwipeToSlide from '../components/VerticalSlide'




const Desarrollo = () => {
     return (
          <div className="container">
               <NavBar/>
               <div className="containerdash">
                    <div className="panelDesarrollos">
                         <h2>APERTURA Y CIERRE</h2>
                         
                    </div>
                    <div className="panelStats">
                         <div className="asesores">
                              <div className="titleAsesores">
                                   <h2>ASESORES HORAS DE ATENCIÓN</h2>
                                   <Customdropdown
                                   items={[
                                        { value: "Últimos 30 días", id: 1 },
                                        { value: "Últimos 7 días", id: 2 },
                                        { value: "Hoy", id: 3 }
                                      ]}
                              />
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
