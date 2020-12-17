import React from 'react'
import VideocamIcon  from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Edificio from './Edificio';

export const CardDesarrollo = (props) => {



    return (
        
             <div className="slideContent">
                               <h2>{props.name}</h2>
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
                                    
                                    <div className="iconCam">
                                         <LocationOnIcon width={20}/>
                                         <p>Activo</p>
                                    </div>
                               </div>
                               
                               
                               <div className="open">
                                    <p>Abierto</p>
                               </div>
                               <Edificio width={100} opacity={0.4} className="edificio"/>
                          </div>  
        
    )
}
