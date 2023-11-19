import React, { useState } from 'react'
import './card.css'
const Card = ({title,type,desc,technologies_used,imageRef}) => {
  const [expanded,setExpanded] = useState(false);
  return (
    <div className='card' onClick={()=>{setExpanded(!expanded)}}>
        <div className='info'>
          <span className='image'>
            <img src={imageRef}></img>
          </span>
            <p className='info_text'><h3>{title}</h3>
            <br/>
            <span>{type}</span>
            <br/>
            <span>{technologies_used}</span></p>
        </div>
        <div className={'desc ' + (expanded && 'show')} >
            {/* <span>{}</span> */}
            <br/>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Card