import React  from "react";
import styled from "styled-components";
import ProjectCard from './ProjectCard';
import { Work } from "../data";



const Projects = () => {
  
  return (
    <Container >
      {Work.map((item) => (
        <ProjectCard key={item.id} work={item}/>
      ))}
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  // border: 1px solid red;
  border-top: 1px solid grey;
  //  background:white;
  margin-top: 15rem;
`;

export default Projects;
