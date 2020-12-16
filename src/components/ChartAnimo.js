import React from 'react'
import { ChartBar } from './progressbar/ChartBar'
import { ChartBarQc } from './progressbar/ChartBarQc'

const data = [
    {
         personasPub: 278,
         personasQc: 47,
         felicesPub:278,
         felicesQc: 68,
         neutralesPub: 108,
         neutralesQc: 68,
         molestasPub:48,
         molestasQc:46,
         totalPersonas: 377,
         bgcolor1: "#00C853",
         bgcolor2: "#0061B2",
         bgcolor3: "#FF8A01"
    }
    
]



export const ChartAnimo = () => {
   
    return (
        data.map(personas=>(
            <div className="containerAnimo">
                <div className="felices">
                    <ChartBar bgcolor={personas.bgcolor1} numpersonas={personas.felicesPub}/>
                    <ChartBarQc bgcolor={personas.bgcolor1} numpersonas={personas.felicesQc}/>
                </div> 
                <div className="neutrales">
                    <ChartBar bgcolor={personas.bgcolor2} numpersonas={personas.neutralesPub}/>
                    <ChartBarQc bgcolor={personas.bgcolor2} numpersonas={personas.neutralesQc}/>
                </div>
                <div className="molestas">
                    <ChartBar bgcolor={personas.bgcolor3} numpersonas={personas.molestasPub}/>
                    <ChartBarQc bgcolor={personas.bgcolor3} numpersonas={personas.molestasQc}/>
                </div> 
                <div className="totalPersonas">
                    <p>PÚBLICO: <span>{personas.personasPub}</span></p>
                    <p>QC: <span>{personas.personasQc}</span></p> 
                    <div className="total">
                        <h2>TOTAL DE PERSONAS</h2>
                        <h1>{personas.totalPersonas}</h1>
                    </div>       
                </div>
            
            </div>
            
            

            
        
        ))
           
       
        
    )
}
