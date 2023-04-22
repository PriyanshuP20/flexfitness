import React from 'react'
import '../src/style.css';


export default function exercise(props) {
  return (
    <div>
        <div className='card' >
            <div className='imgg'>{props.img}</div>
            <h3 className='title'>{props.name}</h3>
            <h2 className='des'>{props.des} </h2>
            </div>
    </div>
  )
}
