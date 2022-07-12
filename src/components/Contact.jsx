import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Contact = () => {
  // const ref = useRef(null);
  // gsap.registerPlugin(ScrollTrigger);

  // useLayoutEffect(() => {
  //   let element = ref.current;

  //   ScrollTrigger.create({
  //     // scroller: "[data-scroll-container]",
  //     trigger: element,
  //     start: "top top",
  //     end: "bottom top",
  //     pin: true,
  //     pinSpacing: false,
  //     scrub: true,
  //   });
  //   return () => {
  //     ScrollTrigger.kill();
  //   };
  // }, []);
  return (
    <Container>
      <Header>Get in Touch</Header>
      <Content>
        {" "}
        Currently looking for new opportunities,my inbox is always open.Whether
        you have a question,or just want say hi,I will try my best to get back
        to you
      </Content>

      <Button text="Say Hi!"  />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 75vh;
  // position: relative;
  background: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    min-height: 50vh;
  }
`;

const Content = styled.p`
  width: 70%;
  text-align: center;
  margin-bottom: 1.5rem;

   font-family: "Ubuntu Mono", monospace;

  //  font-family: "Encode Sans SC", sans-serif;

  font-size: 19px;
  font-weight: 400;
  line-height: 40px;
  color: #ffffff;

  @media (max-width: 800px) {
    font-size: 16px;
    margin-bottom: 1rem;
    line-height: 30px;
  }
`;

const Header = styled.h2`
  font-family: "Ubuntu Mono", monospace;
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 1.7rem;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

export default Contact;
