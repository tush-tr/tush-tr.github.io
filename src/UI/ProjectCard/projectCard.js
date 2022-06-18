import styled from "styled-components";
const ProjectCardWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: ${(prop) => (prop.id % 2 === 0 ? "row-reverse" : "row")};
  & .project_card__image-section {
    width: 40%;
    padding: 10px;
  }
  & .project_card__info-section {
    width: 60%;
    padding: 10px;
  }
  & .project_card__info-section h2,
  .project_card__links,
  .project_card__techs {
    margin-left: ${(prop) => prop.id % 2 !== 0 && "auto"};
    width: fit-content;
    padding-right: 10px;
  }
  & .project_card__info-para {
    background-color: #112240;
    padding: 10px;
  }
  & a {
    text-decoration: none;
    padding: 5px;
  }
  & a svg {
    height: 30px;
    width: 30px;
    color: white;
  }
  & a svg:hover {
    height: 40px;
    width: 40px;
  }
  & img {
    width: 100%;
    object-fit: cover;
    opacity: 1;
    box-shadow: 6px 8px 5px 0px #64ffda;
    display: block;
    position: relative;
    border-radius: 10px;
    background-color: #64ffda;
    mix-blend-mode: luminosity;
  }
  & img:hover {
    mix-blend-mode: normal;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    & .project_card__image-section {
    width: 100%;
  }
  & .project_card__info-section {
    width: 100%;
  }
  }
`;
export default ProjectCardWrapper;
