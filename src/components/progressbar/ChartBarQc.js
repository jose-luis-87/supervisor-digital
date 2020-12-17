import React from 'react';
import Feliz from './Feliz';
import Molestia from './Molestia';
import Neutral from './Neutral';


export const ChartBarQc = (props) => {

    const { bgcolor,  numpersonas } = props;

    const containerStyles = {
        
        height: 32,
        width: `${(numpersonas/300)*100}%`,
        backgroundColor: "transparent",
        
        marginTop: 12, 
    }

    const fillerStyles ={
        height: '100%',
        width: '100%',
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign:'right'
    }

    const spanStyles = {
        padding: 5,
        color: '#000A12',
        fontSize: 10,
       
    }

    return (
        <div className="containerCharts">
            
            <div className="containerChart" style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={spanStyles}>{`QC: ${numpersonas}`}</span>
                </div>
            </div>

            {(() => {

  

            switch (bgcolor) {

            case '#00C853':

                return (

                <Feliz width={40}/>

                )

            case '#0061B2':

                return (

                <Neutral width={40}/>

                )

            case '#FF8A01':

                return (

                <Molestia width={40}/>

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
