import styled from "styled-components";
const CodeChallenges = styled.section`
  & .code-challenge-row {
    display: flex;
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    & .code-challenge-row {
      display: flex;

      flex-direction: column;
      width: 90%;
    }
  }
`;

export default CodeChallenges;
