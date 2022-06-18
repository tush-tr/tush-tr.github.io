import "./App.css";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Socials from "./components/Socials";
import About from "./pages/About";
function Main() {
  return (
    <div className="portfolio-wrapper">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Work />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Socials />
    </div>
  );
}

export default Main;