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
          <div className="item-info">
            <p className="name">Bidder's range</p>
            <div className="range">
              <p>X</p>
              <p>Y</p>
            </div>
          </div>
          <div className="item-info-2">
            <p className="name">Your range</p>
            <div className="range">
              <p>X</p>
              <p>Y</p>
            </div>
          </div>
          <div className="item-info">
            <p className="name">Proposal price</p>
            <form>
              <input className="input"></input>
            </form>
          </div>
          <div className="submit-btn">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewMatch;
