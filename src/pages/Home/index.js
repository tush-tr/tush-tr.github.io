import Home from "./home";
import Terminal from "../../components/HomePage/terminal";
import Portfolio from "./portfolio";
import "./style.css";
const HomePage = () => {
  return (
    <div className="home-page-wrappper-section">
      <div className="home-page">
        <Home />
        <div className="terminal-home-page">
          <Terminal />
        </div>
      </div>
      <div>
        <Portfolio />
      </div>
    </div>
  );
};
export default HomePage;
