import "./App.css";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Offer from "./pages/Offer";
function Main() {
  return (
    <div className="portfolio-wrapper">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Work />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/offer" element={<Offer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
