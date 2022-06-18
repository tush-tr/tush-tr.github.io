import styled from "styled-components";
const SocialBar = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;

  & .social-bar-wrapper {
    padding: 20px;
    border-top: 2px solid #4debc67a;
    border-bottom: 2px solid #4debc67a;
    width: 80%;
  }
  & .social-bar__icons {
      padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & footer {
    display: flex;
    justify-content: center;
  }
`;
export default SocialBar;
