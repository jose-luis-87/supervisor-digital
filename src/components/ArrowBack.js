import React from 'react'

const ArrowBack = (props) => {
    const {className, onClick} = props
    return (
        <svg 
           className={className}
           height={props.height}
           width={props.width}
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 512 512"
            onClick={onClick}
           
           >
        
      
        <path fill="#ffffff" d="M123.6,242L360.4,5.8c7.8-7.7,20.3-7.7,28.1,0c7.7,7.8,7.7,20.3,0,28.1L165.7,256l222.7,222.1
	c7.8,7.7,7.8,20.3,0,28.1c-3.9,3.9-9,5.8-14.1,5.8c-5.1,0-10.1-1.9-14-5.8L123.6,270.1c-3.7-3.7-5.8-8.8-5.8-14
	S119.8,245.7,123.6,242z"/>
        </svg>
    )
}

export default ArrowBack