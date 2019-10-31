import React, { useState, useEffect } from "react";
import "./App.css";

import Display from "./components/Display";
import Dasboard from "./components/Dashboard";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);

  const handleHit = () => {
    setStrikes(0);
    setBalls(0);
  };

  const handleBall = () => {
    setBalls(balls + 1);
    if (balls === 3) {
      setBalls(0);
      setStrikes(0);
    }
  };

  const handleStrike = () => {
    setStrikes(strikes + 1);
    if (strikes === 2) {
      setBalls(0);
      setStrikes(0);
    }
  };

  const handleFoul = () => {
    if (strikes <= 1) {
      setStrikes(strikes + 1);
    }
  };

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Dasboard
        handleHit={handleHit}
        handleBall={handleBall}
        handleStrike={handleStrike}
        handleFoul={handleFoul}
      />
    </div>
  );
}

export default App;
