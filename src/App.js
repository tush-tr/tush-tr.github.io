import './App.css';
import Home from "./pages/Home"
import CV from "./pages/CV"
import { HashRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/resume" element={<CV />} />
      </Routes>
    </Router>
  );
}

export default App;
