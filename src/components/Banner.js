import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../image/images.jpg";
import Button from "../components/reusable/button.js";
import '../components/banner.css';
import Header from "./Header";
import Form from '../components/Form';


export default function Banner() {
  return (<Container>
    <Main>
      
      {/* <Header/> */}
      <div className="slogan">
          <span>
          <h1 style={{fontSize:'1cm'}}>Build Perfect body shape<br/>
             for good and healthy life.</h1></span>
             <Link to="/Form">
          <Button animation="fadeInLeft" >Became a member</Button></Link>
          </div>
    </Main>
  </Container>
    
    
    
    /* //</Main> */
  );
}

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
  
`;

const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
`;



