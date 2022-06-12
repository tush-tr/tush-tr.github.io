import styled from "styled-components";
const ExperienceCard = styled.div`
  display: flex;
  margin-top: 25px;
  & .experience-card__companies {
    display: flex;
    flex-direction: column;
  }
  & button {
    text-decoration: none;
    box-shadow: none;
    border: none;
    padding: 5px 30px;
    background-color: transparent;
    color: #ffffffb5;
    border-right: 2px solid #cdb8b88c;
    margin: 0px 10px 0 0px;
    width: 140px;
  }
  & .activeExperience {
    color: #64ffda;
    border-right-color: #64ffda;
    background-color: #122645;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    & .experience-card__companies {
      flex-direction: row;
    
    }
    & button{
        border-right: none;
        border-bottom: 2px solid #cdb8b88c;
    }
    & .activeExperience{
        border-bottom-color: #64ffda;
    }
  }
`;

export default ExperienceCard;
