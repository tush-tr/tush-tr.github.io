import styled from "styled-components";
const ChallengeWrapper = styled.div`
  text-decoration: none;
  color: white;
  width: 50%;
  background-color: #09244c;
  padding: 20px;
  border-radius: 5px;
  margin: 20px;
  box-shadow: -2px 1px 2px 0px #64ffda;
  a {
    text-decoration: none;
    color: #64ffda;
  }
  & h3 {
    background-color: #0b182c;
    padding: 5px;
    padding-left: 10px;
    border-radius: 10px;
    font-size: 1.5rem;
    box-shadow: 1px 1px 2px 0px;
  }
  & p {
    font-size: 0.8rem;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export default ChallengeWrapper;
