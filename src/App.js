import './App.css';
import Home from "./home"
import CV from "./cv"
import { HashRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/resume" element={<CV />} />
      </Routes>
    </Router>
  );
}

export default App;
