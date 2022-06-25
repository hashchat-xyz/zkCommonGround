import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "../styles/connectwallet.css";
import flag from "../images/flag.jpeg";
import { useNavigate } from "react-router-dom";
import "../styles/connectwallet.css";
import dot from "../images/dot.svg";

function ConnectWallet() {
  const [low, setLow] = useState("");
  const [high, setHigh] = useState("");
  const [noti, setNoti] = useState(false);

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

  const handleNoti = () => {
    setNoti(!noti);
  };

  return (
    <div className="connect-wallet-container">
      <div className="top-container">
        <ConnectButton showBalance={false} />
        <button className="noti" onClick={handleNoti}>
          Notifications
        </button>
        {noti && (
          <div className="noti-bar">
            <div className="noti-item">
              <img className="dot" src={dot} alt="dot"></img>
              <p className="new-offer-text">New Offer</p>
            </div>
          </div>
        )}
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
