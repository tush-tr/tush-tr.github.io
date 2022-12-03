import HomeCard from "../../../UI/HomeCard";
import { BsPencilSquare } from "react-icons/bs";
const Frontend = () => {
  return (
    <HomeCard>
      <h2>
        <BsPencilSquare /> FRONT-END WEB DEVELOPMENT
      </h2>
      <p>I specialize in applications written in React and Next.js.</p>
      <div>
        <p>My current experience and skills in front-end includes:</p>
        <ul>
          <li>
            TypeScript/JavaScript development: bootstraping, refactoring,
            improving the structure, reliability, build setup;
          </li>
          <li>
            Building web UIs using React.js, Next.js and Vanilla JavaScript.
          </li>
          <li>Setting up CI/CD for code deployment.</li>
          <li>
            experience in JS ecosystems, by having used in the
            past many libraries like Next.js, React.
          </li>
        </ul>
      </div>
    </HomeCard>
  );
};
export default Frontend;
