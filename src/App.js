import "./App.css";
import Main from "./Main";
import { useEffect, useState } from "react";
import Loading from "./utils/loading";
import { HashRouter as Router } from "react-router-dom";
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
        <Main />
      </Router>
    );
  } else {
    return <Loading />;
  }
}

export default App;
