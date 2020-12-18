import React from 'react'
import VideocamIcon  from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import '../routes/App.scss'

const DescBar = () => {
     return (
          <div className="containerBar">
               <div className="descBar">
                    <p>
                         Puntos de venta con supervisor digital activo
                    </p>
                    <div className="camIcons">
                         <div className="camaras">
                              <div className="cam">
                                   <div className="desc">
                                      <h3>01</h3>  
                                   </div>
                                   
                                   <div className="icon">
                                        <VideocamIcon width={28} style={{ color: "#00C853" }}/>
                                        <p>Activos</p>
                                   </div>
                              </div>
                              <div className="cam">
                                   <div className="desc">
                                      <h3>10</h3>
                                   </div>
                                   <div className="icon">
                                        <VideocamOffIcon width={28} style={{ color: "#FF8A01" }}/>
                                        <p>Inactivos</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div id="br"></div>
          </div>
     )
}

export default DescBar
