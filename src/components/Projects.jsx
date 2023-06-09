import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { Work } from "../data";

const Projects = () => {
  const [showProjects, setShowProjects] = useState("frontend");
  return (
    <Container id="projects">
      <Nav>
        <div  onClick={() => setShowProjects("frontend")}>Frontend</div>
        <div sh onClick={() => setShowProjects("backend")}>Backend</div>
      </Nav>
      {Work.filter((item) => item.projectType === showProjects).map((item) => (
        <ProjectCard key={item.id} work={item} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  // border: 1px solid red;
  border-top: 1px solid grey;
  //  background:white;
  margin-top: 15rem;
`;

const Nav = styled.div`
  display: flex;
  border: 1px solid #ffffff;
  margin-top: 30px;
  background: white;
  width: 220px;
  justify-content: Space-evenly;
  align-items: center;
  border-radius: 18px;
  height: 35px;

  div {
    border: ${(props) =>
      props.showProjects === "frontend"
        ? "1px solid red"
        : props.showProjects === "backend"
        ? "1px solid green"
        : ""};

        cursor:pointer;


  }
`;

export default Projects;
