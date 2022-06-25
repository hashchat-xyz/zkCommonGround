import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "../styles/connectwallet.css";
import flag from "../images/flag.jpeg";
import { useNavigate } from "react-router-dom";

function ConnectWallet() {
  const [low, setLow] = useState("");
  const [high, setHigh] = useState("");
  let navigate = useNavigate();

  const handleLow = (e) => {
    setLow(e.target.value);
  };

  const handleHigh = (e) => {
    setHigh(e.target.value);
  };

  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <div className="connect-wallet-container">
      <div className="top-container">
        <ConnectButton showBalance={false} />
      </div>
      <div className="title-container">
        <h2 className="title">List an asset</h2>
        <div className="image-container">
          <img className="asset-image" src={flag} alt="flag"></img>
        </div>
        <div className="main-text-container">
          <div className="item-info">
            <p className="name">Flag on the moon.</p>
            <p className="desc">
              The United States flag on the moon. Flag pole may contain moon
              debris.
            </p>
          </div>
          <div className="item-info">
            <p className="name">Lowest acceptable price</p>
            <form>
              <input className="input" onChange={handleLow}></input>
            </form>
          </div>
          <div className="item-info">
            <p className="name">Highest acceptable price</p>
            <form>
              <input className="input" onChange={handleHigh}></input>
            </form>
          </div>
          <div className="submit-btn">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
