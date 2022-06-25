import React from "react";
import "../styles/landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  let navigate = useNavigate();
  return (
    <div className="main-container">
      <h2>
        <span>zk</span>CommonGround
      </h2>
      <p>Find the right price for your favorite digital assets.</p>
      <button
        onClick={() => {
          navigate("./connectwallet");
        }}
      >
        Launch App
      </button>
    </div>
  );
}

export default Landing;
