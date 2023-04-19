import React from "react";
import styled from "styled-components";
import bg from "../image/bg.png";
import Button from "../components/reusable/button.js";

import Header from "./Header";


export default function Banner() {
  return (<Container>
    <Main>
      
      <Header/>
      <div className="slogan">
          <span>
          <h1>Build Perfect body shape<br/>
             for good and healthy life.</h1></span>
          <Button animation="fadeInLeft">Became a member</Button>
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



