import ChallengeWrapper from "./challengeWrapper";
const Challenge = ({challengeName,description}) => {
  return (
    <ChallengeWrapper>
      <h3>{challengeName}</h3>
      <p>
        {description}
      </p>
    </ChallengeWrapper>
  );
};
export default Challenge;
