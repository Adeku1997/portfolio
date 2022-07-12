import React from "react";
import styled from "styled-components";
import Gif from "../components/Gif";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <Container>
      <VideoContainer>
        {" "}
        <Gif />
      </VideoContainer>
      <IntroContainer>
        <FirstParagraph>Hey There!</FirstParagraph>

        <SecondParagraph>
          I'm Ali,a <span>fullstack Software Developer </span>based in Lagos,
          Nigeria.
        </SecondParagraph>
      </IntroContainer>
   
      <Projects />
      <Contact />
     <Footer/>
  
    </Container>
  );
};

const Container = styled.div`
  background: #000000;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  //   justify-content:center;
  flex-direction: column;
  align-items: center;
  over-flow-x:hidden;

  
  @media(max-width :800px){
    overflow-x:hidden;
  
  }
`;

const VideoContainer = styled.div`
  margin-top: 8rem;

  @media (max-width: 800px) {
    margin-top: 6rem;
  }

 
  }
`;

const IntroContainer = styled.div`
  width: 70%;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
  }
`;

const FirstParagraph = styled.p`
  color: #ffffff;
  font-size: 50px;
  font-weight: 400;
  line-height: 60px;
  //   font-family: "League Mono Extended", monospace;
  font-family: "Ubuntu Mono", monospace;
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    font-size:30px;
    margin-bottom:0;
    line-height:40px;
  }
`;

const SecondParagraph = styled.p`
  color: #ffffff;
  font-size: 50px;
  font-weight: 400;
  font-family: "Ubuntu Mono", monospace;
  line-height: 60px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 25px;
    line-height:40px;
    
  }

  span {
    color: #64ef69;
  }
`;

export default Home;
