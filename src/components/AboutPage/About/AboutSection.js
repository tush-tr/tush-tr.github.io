import styled from "styled-components";

const AboutSection = styled.div`
  width: 80%;
  padding: 40px;

  & p {
    color: white;
  }
  & a {
    text-decoration: none;
    color: #64ffda;
  }
  & span {
    color: #64ffda;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export default AboutSection;
