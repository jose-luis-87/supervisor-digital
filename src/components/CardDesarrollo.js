import React from 'react'
import VideocamIcon  from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const CardDesarrollo = (props) => {

     const { bgcolor,  name } = props;
     function GotoLink(url) {
          window.location.href = url;
           }
     

     return (
        
             <div className="slideContent" onClick={()=>{GotoLink("#/desarrollo")}}>
                               <h2>{name}</h2>
                               <div className="supervisor">
                                    <div className="title">
                                       <h4>SUPERVISOR DIGITAL</h4>  
                                    </div>
                                    
                                    {(() => {

                                        switch (bgcolor) {

                                        case '#00C853':

                                        return (

                                                  
                                             <div className="iconCam">
                                                  <VideocamIcon width={28} style={{ color: "#00C853" }} />
                                                  <p>Activo</p>
                                              </div>

                                        )


                                        case '#FF8A01':

                                        return (

                                             <div className="iconCam">
                                                  <VideocamOffIcon width={28} style={{ color: "#FF8A01" }} />
                                                  <p>Inactivo</p>
                                             </div>

                                        )

                                        default:

                                        return (

                                             <div></div>

                                        )

                                        }

                                    })()}
 
                               </div>
                               <div className="persons">
                                    <div className="title">
                                       <h4><span>4</span> personas</h4>
                                    </div>
                              {(() => {

  

                                        switch (bgcolor) {

                                        case '#00C853':

                                        return (

                                             <div className="iconCam">
                                                  <LocationOnIcon width={20} style={{ opacity:1 }} />
                                                  <p>Activo</p>
                                             </div>
                                             

                                        )


                                        case '#FF8A01':

                                        return (

                                             <div className="iconCam">
                                                  <LocationOnIcon width={20} style={{ opacity: 0.4 }} />
                                                  <p>Inactivo</p>
                                             </div>
                                        

                                        )

                                        default:

                                        return (

                                             <div></div>

                                        )

                                        }



                                        })()}      
                                    
                               </div>
                               {(() => {

  

                                        switch (bgcolor) {

                                        case '#00C853':

                                        return (

                                                  
                                             <div className="open">
                                              <p>Abierto</p>
                                             </div>
                                        )


                                        case '#FF8A01':

                                        return (

                                             <div className="close">
                                                  <p>Cerrado</p>
                                             </div>

                                        )

                                        default:

                                        return (

                                             <div></div>

                                        )

                                        }



                                        })()}
                               
                               
                               
                          </div>  
        
    )
}
