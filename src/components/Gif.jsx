import React from "react";
import GIF from "../assets/Home GIF.gif";
import styled from "styled-components";

const Gif = () => {
  return (
    <GifContainer>
      <img src={GIF} alt='gif' width={300} height={300}  />
    </GifContainer>
  );
};

const GifContainer = styled.div`
  img {
    @media (max-width: 800px) {
      width:170px;
      height:170px;
    }
  }
`;  
export default Gif;
