import styled from "styled-components";
const SideMenuWrapper = styled.section`
  box-shadow: rgb(55 86 79) 5px 0px 4px 0px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  /* border-radius: 10px; */
  background-color: #252525;

  & img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    opacity: 1;
    box-shadow: 6px 8px 5px 0px #64ffda;
    display: block;
    position: relative;
    border-radius: 10px;
    background-color: #64ffda;
    mix-blend-mode: luminosity;
  }
  & img:hover {
    mix-blend-mode: normal;
  }
  & .side-menu__text {
    width: 100%;
    text-align: center;
    margin: 10px;
    padding-top: 20px;
  }
  & h3 {
    padding-bottom: 20px;
  }
  & h4 {
    font-size: 1rem;
  }
  & p {
    padding-top: 20px;
    margin-top: 10px;
    font-size: 0.8rem;
    color: white;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: row;
    padding: 5px;
    padding-left: 10px;
    & img {
      width: 100px;
      height: 100px;
    }
    & p {
      padding-top: 0;
    }
    & h4 {
      font-size: 0.8rem;
    }
    & .side-menu__text {
      padding-left: 10px;
      padding-top: 5px;
    }
    & h3 {
      padding-bottom: 10px;
    }
  }
`;

export default SideMenuWrapper;
