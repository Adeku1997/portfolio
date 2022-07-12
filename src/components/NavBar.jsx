import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import {Link} from 'react-router-dom'
import { keyframes } from "styled-components";

const NavBar = ({ click, setClick }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(()=>{
    window.addEventListener('resize',updateMedia);

    return ()=> window.removeEventListener('resize',updateMedia)
  },[]);
  return (
    <>
      <Container>
        <Logo>MO</Logo>

        <NavLinks>
          <Home>Home</Home>
          <Projects>Projects</Projects>
          <AboutMe>AboutMe</AboutMe>

          <SayHi>SayHi!</SayHi>
        </NavLinks>
        {isDesktop && <Button text="View Resume" link="https://google.com" />}

        <Hamburger onClick={() => setClick(!click)}>
          <Menuone click={click}></Menuone>
          <Menutwo click={click}></Menutwo>
          <Menuthree click={click}></Menuthree>
        </Hamburger>
      </Container>

      {/* mobile menu */}
      <MobileMenu click={click}>
        <MobileLists>
          <MobileItem>Projects</MobileItem>
          <MobileItem>
            <Link to='/about' className="nav-link">About Me</Link>
          </MobileItem>
          <MobileItem>Say Hi!</MobileItem>
          <MobileItem>View Resume</MobileItem>
        </MobileLists>
      </MobileMenu>
    </>
  );
};

const Container = styled.div`
  height: 100px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  // background:blue;
  position: fixed;

  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 6;
`;

const Logo = styled.a`
  font-family: "League Mono Extended", monospace;
  font-size: 40px;
  font-weight: 400;
  color: #ffffff;
  padding-left: 3rem;

  @media (max-width: 800px) {
    font-size: 25px;
    padding-left: 1.5rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  width: 40vw;
  justify-content: space-between;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Home = styled.li`
  list-style: none;
  font-family: "League Mono Extended", monospace;
  line-height: 20px;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: #64ef69;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  font-weight: 400;
  color: #ffffff;
`;

const AboutMe = styled(Home)`
  color: #ffffff;
  

`;

const Projects = styled(Home)`
  color: #ffffff;
`;

const SayHi = styled(Home)`
  color: #ffffff;
`;

// mobile

const Hamburger = styled.div`
  position: absolute;
  right: 30px;
  top: 38%;

  :hover {
    cursor: pointer;
  }

  @media (min-width: 64em) {
    display: none;
  }
`;

const Menuone = styled.div`
  width: ${(props) => (props.click ? "1rem" : "1.5rem")};
  height: 3px;
  color: #f7f5f2;
  background: #f7f5f2;
  margin-bottom: 3px;
  transform: ${(props) =>
    props.click
      ? "rotateZ(45deg) translateY(5px) translateX(4px)"
      : "rotate(0)"};
  transition: all 0.5s;
`;

const Menutwo = styled.div`
  width: 1.5rem;
  height: 3px;
  color: #f7f5f2;
  background: #f7f5f2;
  margin-bottom: 3px;
  transition: all 0.5s;
  opacity: ${(props) => (props.click ? 0 : 1)};
`;

const Menuthree = styled.div`
  width: ${(props) => (props.click ? "1rem" : "1.5rem")};
  height: 3px;
  color: ##f7f5f2;
  background: #f7f5f2;
  transform: ${(props) =>
    props.click
      ? "rotateZ(-45deg) translateY(-5px) translateX(3px)"
      : "rotate(0)"};
  transition: all 0.5s;
`;

const MobileMenu = styled.div`
  //  display: ${(props) => (props.click ? "block" : "none")};
  height: 33vh;
  z-index: 3;
  position: fixed;
  transform: ${(props) =>
    props.click ? "translate-Y(37vh)" : "translateY(-50vh)"};
  transition-property: transform;
  transition-duration: 0.4s;

  // animation : ${(props) => (props.click ? "slideUp" : "slideDown")}
  top: 100px;
  right: 0;
  left: 0;

  background: #000000;
`;

const MobileLists = styled.ul`
  color: #ffffff;
`;

const MobileItem = styled.li`
  padding: 25px 12px;
  font-family: "Ubuntu Mono", monospace;
  font-size: 16px;


`;

export default NavBar;
