import Home from "./home";
import Terminal from "../../components/terminal";
import "./style.css";
const HomePage = () => {
  return (
    <div className="home-page">
      <Home />
      <div className="terminal-home-page">
        <Terminal />
      </div>
    </div>
  );
};
export default HomePage;
