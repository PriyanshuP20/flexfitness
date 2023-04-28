import React from 'react'
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteIcon from '@mui/material'
import BoltIcon from '@mui/icons-material/Bolt';

export default function Footer() {
  return (
    <div>
         <footer style={{backgroundColor:'#FFF9DE',marginBottom:'0%',padding:'2px',textAlign:'center'}}>
            
            <h4>Made with </h4> <FavoriteIcon/> <h4>for</h4> <BoltIcon/>
            <br/>@Team_Flexfitness
            
            </footer>   



    </div>
  )
}

