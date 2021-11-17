import './App.css';
import Home from "./home"
import CV from "./cv"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/resume" element={<CV />} />
      </Routes>


    </Router>
  );
}

export default App;
