import Challenge from "./challenge";
import CodeChallenges from "./CodeChallenge";
const Challenges = () => {
  return (
    <CodeChallenges>
      <div className="code-challenge-row row-1">
        <Challenge
          challengeName="Hamming Distance"
          link="https://tush-tr.github.io/vanilla-js-projects/coding-challenges/hamming-distance/"
          description="The Hamming distance between two integers is the number of positions at which the corresponding bits are different."
        />
        <Challenge
          challengeName="Buy and Sell Stock"
          link="https://tush-tr.github.io/vanilla-js-projects/coding-challenges/buysell-stock/"
          description="maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock."
        />
      </div>
    </CodeChallenges>
  );
};
export default Challenges;
