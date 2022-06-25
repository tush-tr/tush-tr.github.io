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
    border: 2px solid #020c1c;
    height: 100%;
    text-align: center;
    border-radius: 10px;
  }
  & img {
    height: 300px;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }
  & .project_card__info-section {
    padding: 20px;
  }
  & .project_card__links,
  .project_card__techs {
    margin-left: auto;
    width: fit-content;
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
`;
export default Project;
