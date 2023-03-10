import React from "react";
import "./App.css";
import ReactGA from "react-ga4";
ReactGA.initialize("G-BRK1J0G9BT");
function App() {
  ReactGA.send({ hitType: "pageview", page: "/home" });
  const handleLogin = () => {
    ReactGA.event("Login",{
      action: "clicked",
      label: "Handle Login",
    });
  };
  const handleLogout = () => {
    ReactGA.event("Logout",{
      action: "clicked",
      label: "Handle Logout",
    });
  };
  return (
    <div className="App">
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
