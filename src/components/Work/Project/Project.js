import styled from "styled-components";
const Project = styled.div`
  width: fit-content;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #020c1c;
  margin: 10px;
  border-radius: 10px;
  :hover {
    box-shadow: 1px 1px 11px 3px white;
    width: 41%;
  }
  & .project_card__image-section {
    width: 100%;
    height: 250px;
    text-align: center;
    border-radius: 10px;
  }
  & img {
    height: 100%;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }
  & .project_card__info-section {
    padding: 20px;
    width: 100%;
  }
  & .project_card__links,
  .project_card__techs {
    margin-left: auto;
    width: fit-content;
  }
  & .project_card_tech_links{
    margin-left: auto;
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
  & h2,
  p {
    color: white;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media (min-width: 1500px) and (max-width: 2000px) {
    width: 30%;
    :hover {
    box-shadow: 1px 1px 11px 3px white;
    width: 31%;
  }
  }
`;
export default Project;
