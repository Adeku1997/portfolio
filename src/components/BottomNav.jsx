import React from "react";
import styled from "styled-components";


const BottomNav = () => {
  return (
    <MainSection>
      
        <Logo>
            MO.
        </Logo>
        <Container>
          <Left>
            <Logo />
            
          </Left>
          <MenuItems>
            <Item >Home</Item>
            <Item >Projects</Item>
            <Item >About Me</Item>
            <Item >View Resume</Item>
            <Item >Contact</Item>
            
          </MenuItems>
        </Container>
        <Bottom>
          <h3>
            &copy; {new Date().getFullYear()} .All rights reserved.
          </h3>
          <h3>Made with &#10084; by Ali.</h3>
          <h3>Design inspiration from Onyebuchi Arinze.</h3>
        </Bottom>
    </MainSection>
  );
};


const MainSection = styled.div`
height:49vh;
width:100vw;
border:1px solid red;
background:#ffffff;



`

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom:2rem;
  border-bottom: 1px solid #000000;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IconList = styled.div`
display:flex;
align-items:center;
margin:1rem  auto;

&>*{
  padding-right:0.5rem;
  transition:all 0.2 ease;

  &:hover{
    transform scale(1.2);
  }
}
`;
const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  // font-family: "Ubuntu Mono", monospace;
  font-size:18px;
`;

const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: #ffffff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 3rem;
  position: absolute;
  left: 10rem;
  top: 23rem;
  
  font-family: "League Mono Extended", monospace;
`;
export default BottomNav;
