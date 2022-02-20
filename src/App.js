import "./App.css";
import Home from "./pages/Home";
import CV from "./pages/CV";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./utils/loading";

function App() {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 5000);
  }, []);
  if (!spinner) {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resume" element={<CV />} />
        </Routes>
      </Router>
    );
  } else {
    return <Loading />;
  }
}

export default App;
