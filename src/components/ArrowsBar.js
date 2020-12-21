import React from 'react'
import Arrow from './Arrow'
import ArrowBack from './ArrowBack'

export const ArrowsBar = () => {
    return (
        <div className="wrapperArrows">
            <div className="arrowIzq">
                <ArrowBack width={30}/>
            </div>
            <div className="arrowDer">
                <Arrow width={30}/>
            </div>
           
        </div>
    )
}
