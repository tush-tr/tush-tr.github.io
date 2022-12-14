import "./App.css";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Offer from "./pages/Offer";
import Youtube from "./components/Redirects/Youtube";
import Linkedin from "./components/Redirects/Linkedin";
import Twitter from "./components/Redirects/Twitter";
import Github from "./components/Redirects/Github";
function Main() {
  return (
    <div className="portfolio-wrapper">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Work />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/offer" element={<Offer />} />
        <Route exact path="/youtube" element={<Youtube />} />
        <Route exact path="/linkedin" element={<Linkedin />} />
        <Route exact path="/twitter" element={<Twitter />} />
        <Route exact path="/github" element={<Github />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
