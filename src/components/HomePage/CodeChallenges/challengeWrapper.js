import styled from "styled-components";
const ChallengeWrapper = styled.div`
  text-decoration: none;
  color: white;
  width: 50%;
  margin: 20px;
  background-color: #2e5184;
  padding: 20px;
  border-radius: 5px;
  margin: 20px;
  box-shadow: -2px 1px 8px 1px #ececec;
  a {
    text-decoration: none;
    color: #64ffda;
  }
  & h3 {
    background-color: #0b192f;
    padding: 5px;
    padding-left: 10px;
    text-align: center;
    font-size: 1.5rem;
    box-shadow: 0px 6px 10px 3px #2e5184;
  }
  & p {
    font-size: 0.8rem;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export default ChallengeWrapper;
