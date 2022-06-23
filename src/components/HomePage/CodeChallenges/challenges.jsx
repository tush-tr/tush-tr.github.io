import Challenge from "./challenge";
const Challenges = () => {
  return (
    <div className="code-challenges">
      <div className="row-1">
        <Challenge
          challengeName="Hamming Distance"
          description="The Hamming distance between two integers is the number of positions at which the corresponding bits are different."
        />
      </div>
    </div>
  );
};
export default Challenges;
