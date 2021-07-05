import React from "react";

const Dashboard = props => {
  return (
    <div>
      <button onClick={props.handleHit}>Hit</button>
      <button onClick={props.handleStrike}>Strike</button>
      <button onClick={props.handleBall}>Ball</button>
      <button onClick={props.handleFoul}>Foul</button>
    </div>
  );
};

export default Dashboard;
