import React from 'react'


export const ChartBarQc = (props) => {

    const { bgcolor,  numpersonas } = props;

    const containerStyles = {
        
        height: 32,
        width: '100%',
        backgroundColor: "transparent",
        
        marginTop: 12, 
    }

    const fillerStyles ={
        height: '100%',
        width: `${(numpersonas/300)*100}%`,
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
        </div>
       
    )
}
