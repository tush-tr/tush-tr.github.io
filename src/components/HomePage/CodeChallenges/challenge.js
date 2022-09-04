import ChallengeWrapper from "./challengeWrapper";
const Challenge = ({challengeName,description,link}) => {
  return (
    <ChallengeWrapper>
      <h3><a href={link} target="_blank" rel="noreferrer">{challengeName}</a></h3>
      <p>
        {description}
      </p>
    </ChallengeWrapper>
  );
};
export default Challenge;
