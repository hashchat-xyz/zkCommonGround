import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "../styles/connectwallet.css";

function ConnectWallet() {
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
              <div className="item-name">
                <p className="name">Name</p>
              </div>
              <form>
                <input className="input"></input>
              </form>
            </div>
            <div className="item-info">
              <p className="name">Description</p>
              <form>
                <input className="input"></input>
              </form>
            </div>
            <div className="item-info">
              <p className="name">Lowest acceptable price</p>
              <form>
                <input className="input"></input>
              </form>
            </div>
            <div className="item-info">
              <p className="name">Highest acceptable price</p>
              <form>
                <input className="input"></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
