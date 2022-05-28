import "./App.css";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
function Main() {
  return (
    <div className="portfolio-wrapper">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default Main;
