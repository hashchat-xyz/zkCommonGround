import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "../styles/connectwallet.css";

import { app, db } from "../firebase";

function ConnectWallet() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [low, setLow] = useState("");
  const [high, setHigh] = useState("");

  console.log(name);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleLow = (e) => {
    setLow(e.target.value);
  };

  const handleHigh = (e) => {
    setHigh(e.target.value);
  };

  return (
    <div className="connect-wallet-container">
      <div className="top-container">
        <ConnectButton showBalance={false} />
      </div>
      <div className="title-container">
        <h2 className="title">List an asset</h2>
        <div className="image-container">
          <p className="upload">Upload Image</p>
        </div>
        <div className="main-text-container">
          <div className="sub-container">
            <div className="item-info">
              <p className="name">Name</p>
              <form>
                <input className="input" onChange={handleName}></input>
              </form>
            </div>
            <div className="item-info">
              <p className="name">Description</p>
              <form>
                <input className="input" onChange={handleDesc}></input>
              </form>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
