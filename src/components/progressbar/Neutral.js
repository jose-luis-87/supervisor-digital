import React from 'react'
import '../../routes/App.scss'

const Neutral = (props) => {
     return (
          <svg
               className={props.className}
               height={props.height}
               width={props.width}
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 40 40"
          >
          <path fill="#FFD600" d="M20,0C9,0,0,9,0,20s9,20,20,20s20-9,20-20S31,0,20,0z M27.7,16.3c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5
            v3.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5V16.3z M9.4,16.3c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5v3.5
            c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5V16.3z M31.5,27.5H8.5c-1,0-1.7-0.8-1.7-1.7S7.6,24,8.5,24h22.9c1,0,1.7,0.8,1.7,1.7
            S32.4,27.5,31.5,27.5z"/>
          </svg>
     )
}

export default Neutral
