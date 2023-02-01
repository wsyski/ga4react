import React from "react";
import "./App.css";
import ReactGA from "react-ga4";
ReactGA.initialize("G-N9J19ZZYQV");
function App() {
  ReactGA.send({ hitType: "pageview", page: "/home" });
  const handleClick = () => {
    ReactGA.event({
      category: "Login",
      action: "clicked",
    });
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Send Event</button>
    </div>
  );
}

export default App;
