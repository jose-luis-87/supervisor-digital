import React from 'react'


export const ProgressBar = (props) => {

    const { bgcolor, promedio } = props;

    const containerStyles = {
        height: 8,
        width: '100%',
        backgroundColor: "#1D272F",
        borderRadius: 50,
        marginTop: 12, 
    }

    const fillerStyles ={
        height: '100%',
        width: `${promedio}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign:'right'
    }

    const spanStyles = {
        padding: 5,
        color: bgcolor,
        fontSize: 12,
        fontWeight: 'bold',
    }

    return (
        <div className="containerProgress">
            <label className="labelProgress">Promedio de atención</label><span style={spanStyles}>{`${promedio}%`}</span>
            <div style={containerStyles}>
                <div style={fillerStyles}></div>
            </div>
        </div>
       
    )
}
