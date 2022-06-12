import styled from "styled-components";
const skillData = styled.div`
  display: flex;

  & .skill-data__icons {
    margin: 10px;
  }
  & .skill-data__icons *{
      margin: 5px;

  }
  & .skill-data_skill-names {
    display: flex;
    margin-left: auto;
  }
  @media only screen and (max-width: 600px) {
      & .skill-data_skill-names{
          flex-direction: column;
      }
  }
`;
export default skillData;
