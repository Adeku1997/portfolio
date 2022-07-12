import React from "react";
import styled from "styled-components";
import { ReactComponent as Facebook } from "../assets/icons/facebook-brands.svg";
import { ReactComponent as Github } from "../assets/icons/github-brands.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter-brands.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";
const SocialMedia = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <Header>FIND ME ELSEWHERE</Header>
        <Socials>
          <a href="" target="_blank" className="github">
            <Github width={27} height={27} />
          </a>

          <a href="" target="_blank" className="facebook">
            <Facebook width={27} height={27} />
          </a>

          <a href="" target="_blank" className="twitter">
            <Twitter width={27} height={27} />
          </a>
          <a href="" target="_blank" className="linkedin">
            <Linkedin width={27} height={27}  fill="white" />
          </a>
        </Socials>

        <Bottom>
          <h3>Made with &#10084; by Ali.</h3>
          <h3>Design inspiration from Onyebuchi Arinze.</h3>
          <h3>&copy; {new Date().getFullYear()}. All rights reserved.</h3>
        </Bottom>
      </ContentContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  // height: 15rem;
  // height:98vh;
  height:51vh;
  width: 100vw;
  background: #000000;
  display: flex;
  justify-content: center;

  @media( max-width : 800px){
    min-height:51vh;
    width:100vw;
  }
`;

const ContentContainer = styled.div`
  color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: #999999;
  font-weight: 400;
  font-family: "Ubuntu Mono", monospace;
  margin-top: 3rem;
  width: 50%;

  
`;

const Header = styled.h1`
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;



const Socials = styled.div`
  margin-top: 2.5rem;
  display: flex;
  width: 50%;
  justify-content: space-around;

  a {
    color: #ffffff;
    padding: 8px 12px;
    
  
  }
`;

const Bottom = styled.div`
  width: 100%;
  margin: 4rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    height:30vh;
    display:flex;
    flex-direction:column;
  }

  h3 {
    text-align:center;
    @media (max-width: 800px) {
      font-size: 16px;
      text-align:center;
      
    }
  }
`;
export default SocialMedia;
