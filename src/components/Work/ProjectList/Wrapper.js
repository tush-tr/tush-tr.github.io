import styled from "styled-components";
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media (min-width: 1500px) and (max-width: 2000px) {
    /* flex-direction: column; */
    width: 90%;
  }
`;
export default Wrapper;
