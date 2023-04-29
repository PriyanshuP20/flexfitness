import React from 'react'


export default function Eprop(props) {
  return (

      <div class="item item--medium" id="similarImage0">
                                            <div class="item__details" >
                                              <div className='imgg'>{props.img}</div>
                                        <div>
                                          <p> .</p>
                                        </div>
                                              <h3  className='titleExe'>{props.name}</h3>
                                              <p className='des'>{props.des} </p>
                                            </div>
      </div>
  
  )
}
