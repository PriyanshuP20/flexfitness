import React from 'react'


export default function Eprop(props) {
  return (

      <div class="item item--medium" id="similarImage0">
                                            <div class="item__details" >
                                            <div className='imgg'>{props.img}</div>
                                            <h3 className='title'>{props.name}</h3>
                                            <h2 className='des'>{props.des} </h2>
                                            </div>
      </div>
  
  )
}
