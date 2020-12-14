import React from 'react';
import imgUser from '../img/user.jpg';
const data = [
     {
          id: 1,
          name: 'Gerardo López',
          puntoventa: 'Plutarco',
          promedio: 68,
          img: {imgUser},
     },
     {
          id: 2,
          name: 'Gerardo López',
          puntoventa: 'Plutarco',
          promedio: 68,
          img: '../img/user.jpg',
     },
     {
          id: 3,
          name: 'Gerardo López',
          puntoventa: 'Plutarco',
          promedio: 68,
          img: '../img/user.jpg',
     },
     {
          id: 4,
          name: 'Gerardo López',
          puntoventa: 'Plutarco',
          promedio: 68,
          img: '../img/user.jpg'
     }
]
function Asesores() {
     
     return (
          <div>
               {data.map(asesor=>(
                    
                    <div className="cardUser">
                         <div className="user">
                              <div className="avatar">
                                   <img src={imgUser} alt={"avatar"}/>
                              </div>
                              <div className="datos">
                                   <h2>{asesor.name}</h2>
                                   <p>{asesor.puntoventa}</p>
                              </div>
                              
                         </div> 
                    </div>
               )

               )}
          </div>
     )
}

export default Asesores

