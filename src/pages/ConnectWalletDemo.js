/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
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

  const handleNoti = () => {
    setNoti(!noti);
  };

  const baseURL = "http://127.0.0.1:5000/";
  const get_sid = useRef(null);
  const [getResult, setGetResult] = useState(null);
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  async function setSellerPrice() {
    const id = get_sid.current.value;
    // navigate("/home");

    if (id) {
      try {
        const res = await fetch(`${baseURL}seller/${id}`);

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        const data = await res.json();

        const result = {
          data: data,
          status: res.status,
          statusText: res.statusText,
          headers: {
            "Content-Type": res.headers.get("Content-Type"),
            "Content-Length": res.headers.get("Content-Length"),
          },
        };

        setGetResult(fortmatResponse(result));
      } catch (err) {
        setGetResult(err.message);
      }
    }
  }

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
              <input
                className="input"
                ref={get_sid}
                onChange={handleLow}
              ></input>
            </form>
          </div>
          <div className="item-info">
            <p className="name">Highest acceptable price</p>
            <form>
              <input className="input" onChange={handleHigh}></input>
            </form>
          </div>
          <div className="submit-btn">
            <button onClick={setSellerPrice}>Submit</button>
          </div>
        </div>
      </div>
      {getResult && (
        <div className="modal">
          <h2 className="submitted">Bid Submitted</h2>
          <p>You will be notified if there is a match.</p>
        </div>
      )}
    </div>
  );
}

export default ConnectWallet;
