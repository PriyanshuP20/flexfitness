import React from 'react'
// import '../style.css';
// import 'C:/Users/priya/Desktop/flexfitness/src/pages/exercise.css'

export default function Exe(props) {
  return (

    
    <div>
      <div class="item item--medium" id="similarImage0">
                                            <div class="item__details" >
                                            <div className='imgg'>{props.img}</div>
                                            <h3 className='title'>{props.name}</h3>
                                            <h2 className='des'>{props.des} </h2>
                                            </div>
      </div>
        {/* <div className='card' >
            <div className='imgg'>{props.img}</div>
            <h3 className='title'>{props.name}</h3>
            <h2 className='des'>{props.des} </h2>
            </div> */}
    </div>
  )
}
