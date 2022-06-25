import React from "react";
import "../styles/home.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import flag from "../images/flag.jpeg";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  const handler = () => {
    navigate("/offerbid");
  };
  return (
    <div className="home-container">
      <div className="top-container">
        <ConnectButton showBalance={false} />
      </div>
      <div className="home-main-container">
        <h2 className="title">Find an asset</h2>
      </div>
      <div className="available-asset-container">
        <img src={flag} alt="flag" className="flag-img"></img>
        <div className="rectangle">
          <div className="asset-words-lol">
            <p className="asset-name">Flag on the moon</p>
            <p className="asset-desc">The United States flag on the moon...</p>
          </div>
          <button className="view-btn" onClick={handler}>
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
