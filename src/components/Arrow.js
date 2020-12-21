import React from 'react'

const Arrow = (props) => {
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
        
      
        <path fill="#ffffff" d="M388.4,242L151.6,5.8c-7.8-7.7-20.3-7.7-28.1,0c-7.7,7.8-7.7,20.3,0,28.1L346.3,256L123.6,478.1
	c-7.8,7.7-7.8,20.3,0,28.1c3.9,3.9,9,5.8,14.1,5.8c5.1,0,10.1-1.9,14-5.8l236.8-236.2c3.7-3.7,5.8-8.8,5.8-14S392.2,245.7,388.4,242
	z"/>
        </svg>
    )
}

export default Arrow
