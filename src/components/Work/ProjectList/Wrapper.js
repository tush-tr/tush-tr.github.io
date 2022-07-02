import styled from "styled-components";
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export default Wrapper;
