import React from "react";
import styled from "styled-components";
import {Image} from "cloudinary-react"

const AboutMe = () => {
  return (
    <AboutContainer>
      <Myself>
        <Description>
          <Header>Nice to Meet y'all</Header>

          <Paragraph>
            Hi,my name is Adeku Ali,a full-stack software developer with 1 year
            plus experience in full-stack development currently living a
            Lagos,Nigeria.
            <br />
            <br />
            well-organised person,problem solver and an independent thinker with
            high attention to detail.
            <br />
            <br />A huge fan of sport ,music and tv-shows. I"m currently working
            as a freelancer ,while also building side projects to enhance my
            skill level.
          </Paragraph>
        </Description>

        <ImageContainer>
          <Image
            cloudName="motohbaba"
            publicId="https://res.cloudinary.com/motohbaba/image/upload/v1658272171/gfbo4r1irpruwoykeu7f.jpg"
          />
        </ImageContainer>
      </Myself>

      <SkillsContainer>
        <Skills>Skills</Skills>

        <Languages>
          <LanguagesHeader>Lanuages and frameworks</LanguagesHeader>

          <LanguageLists>
            <LanguageItem> Html</LanguageItem>
            <LanguageItem> Redux</LanguageItem>
            <LanguageItem> Css</LanguageItem>
            <LanguageItem> Sass</LanguageItem>
            <LanguageItem> PHP</LanguageItem>
            <LanguageItem> Javascript</LanguageItem>
            <LanguageItem> Laravel</LanguageItem>
            <LanguageItem> Sql</LanguageItem>
            <LanguageItem> React</LanguageItem>
            <LanguageItem> TailwindCss</LanguageItem>
            <LanguageItem> Styled components</LanguageItem>
          </LanguageLists>
        </Languages>

        <Education>
          <EducationHeader>Education</EducationHeader>

          <EducationList>
            <EducationOne>
              <h3>AltSchool Africa</h3>
              <p>Backend Developer Student(Nodejs)</p>
              <p></p>
            </EducationOne>
            <EducationTwo>
              <h3>University of Ilorin</h3>
              <p>B.Eng Electrical and Electronics Engineering </p>
              <p>2014-2020</p>
            </EducationTwo>
          </EducationList>
        </Education>
      </SkillsContainer>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding-top: 20vh;
  background: #000000;
  overflow-x:hidden;
`;
const Myself = styled.div`
  min-height: 80vh;
  color: #ffffff;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-bottom: 10rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    display:flex;
    flex-direction:column-reverse;
    width:98%;
    margin:0 auto;
    padding:0 1rem;
  }
`;

const Description = styled.div`
  width: 45%;
  min-height: 70%;

  @media (max-width: 800px) {
    width: 95%;
  }
`;

const Header = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 48px;
  font-family: "Ubuntu Mono", monospace;
`;

const Paragraph = styled.div`
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;

  @media (max-width :800px){
    font-size:17px;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 80%;

  @media (max-width: 800px) {
    width:50%;
    margin-bottom:1rem;
  }

  img {
    width: 68%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 800px) {
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;

const SkillsContainer = styled.div`
  margin-top: 4rem;
  min-height: 80vh;
  margin-left: 10rem;
  margin-right: 10rem;
  over-flow-x:hidden;

  @media (max-width :800px){
   width:99%;
   margin-left:1rem;
   min-height:80vh;
   


  }
`;

const Skills = styled.h2`
  font-size: 24px;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 10px;
  color: #ffffff;
  font-weight: 700;
  line-height: 48px;
  //   font-family: "Ubuntu Mono", monospace;
  font-family: "League Mono Extended", monospace;

  @media(max-width : 800px){
    font-size:22px;
  }
`;

const Languages = styled.div`

margin-top:1rem;
padding-bottom:1rem;

`;

const LanguagesHeader = styled.h3`
  color: #ffffff;
  font-family: "Ubuntu Mono", monospac;
  font-size:22px;

  @media(max-width : 800px){
    font-size:20px;
  }
`;

const LanguageLists = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style-type:upper-roman;
  list-style-position:inside;
  
`;

const LanguageItem = styled.li`
  color: #ffffff;
  font-weight: 300;
  font-size: 18px;
  line-height:1.5
  font-family: "Ubuntu Mono", monospace;

  @media(max-width : 800px){
    font-size:16px;
  }
`;

const Education = styled.div`
margin-top:2.5rem;
`;

const EducationHeader = styled.h3`
  color: #ffffff;
  //   font-family: "Ubuntu Mono", monospac;
  font-family: "League Mono Extended", monospace;
  font-size: 24px;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ffffff;

  @media(max-width :800px){
    font-size:22px;
  }
`;

const EducationList = styled.div`
  margin-top:1rem;
`;

const EducationOne = styled.div`
  color: #ffffff;
  margin-bottom: 1rem;

  h3 {
    font-size: 20px;
  }

  p {
    font-family: "Ubuntu Mono", monospace;
    font-size:16px;
  }
`;

const EducationTwo = styled.div`
  color: #ffffff;

  h3 {
    font-size: 22px;
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }

  p {
    font-family: "Ubuntu Mono", monospace;
    font-size: 16px;
  }
`;

export default AboutMe;
