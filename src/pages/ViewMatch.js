import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import flag from "../images/flag.jpeg";
import "../styles/viewmatch.css";
function ViewMatch() {
  return (
    <div className="home-container">
      <div className="top-container">
        <ConnectButton showBalance={false} />
        <button className="noti">Notifications</button>
      </div>
      <div className="title-container">
        <h2 className="title">View Match</h2>
        <div className="image-container">
          <img className="asset-image" src={flag} alt="flag"></img>
        </div>
        <div className="main-text-container-2">
          <div className="item-info">
            <p className="name">Flag on the moon.</p>
            <p className="desc">
              The United States flag on the moon. Flag pole may contain moon
              debris.
            </p>
          </div>
          <p className="address">Matched with 0x3b7aP9...</p>
          <p className="desc-2">Continue your conversation on hashchat.</p>
          <div className="submit-btn">
            <button>Hashchat</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewMatch;
