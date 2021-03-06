import React from 'react'
import '../../routes/App.scss'

const Feliz = (props) => {
     return (
          <svg
               className="feliz"
               height={props.height}
               width={props.width}
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 40 40"
          >
          <path fill="#FFD600" d="M20,0C9,0,0,9,0,20s9,20,20,20s20-9,20-20S31,0,20,0z M10.4,18.5c0,1.1-1,2-2.1,2c-1.1,0-2-0.9-2-2
          c0-2.1,1.3-5.1,4.7-5.1c3.5,0,4.7,3.1,4.7,5.1c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-0.5-0.1-1.1-0.7-1.1C10.5,17.4,10.4,18,10.4,18.5z
          M29.1,25.9c-1.3,4-5,6.7-9.1,6.7c-4.3,0-7.9-2.7-9.1-6.8c-0.3-1.1,0.3-2.2,1.4-2.5c1.1-0.3,2.2,0.3,2.5,1.4
          c0.6,2.3,2.7,3.8,5.1,3.8c2.4,0,4.5-1.6,5.3-3.9c0.3-1.1,1.5-1.7,2.6-1.3C28.9,23.7,29.5,24.9,29.1,25.9z M31.7,20.5
          c-1.1,0-2-0.9-2-2c0-0.5-0.1-1.1-0.7-1.1s-0.7,0.6-0.7,1.1c0,1.1-0.9,2-2.1,2c-1.1,0-2-0.9-2-2c0-2.1,1.3-5.1,4.7-5.1
          s4.7,3.1,4.7,5.1C33.7,19.6,32.8,20.5,31.7,20.5z"/>
          </svg>
     )
}

export default Feliz
