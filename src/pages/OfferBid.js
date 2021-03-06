/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import dot from "../images/dot.svg";
import flag from "../images/flag.jpeg";
import { useNavigate } from "react-router-dom";
// import "../styles/offerbid.css";
import "../styles/connectwallet.css";

function OfferBid() {
  const [low, setLow] = useState("");
  const [high, setHigh] = useState("");
  const [noti, setNoti] = useState(false);
  const [deal, setDeal] = useState(false);
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


  const baseURL = "https://protected-brook-21952.herokuapp.com";
  // const get_sid = useRef(null);
  const [getResult, setGetResult] = useState(null);
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  async function setRunBuyer() {
    const id = high;

    if (id) {
      try {
        const res = await fetch(`${baseURL}/runbuyer/${id}`);

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        const data = await res.json();
        if (data === "DEAL") {
          setDeal(true)
        }
        console.log('data: ', data);
        console.log('deal: ', deal);

        const result = {
          data: data,
          status: res.status,
          statusText: res.statusText,
          headers: {
            "Content-Type": res.headers.get("Content-Type"),
            "Content-Length": res.headers.get("Content-Length"),
          },
        };

        console.log(result);

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
        <h2 className="title">Make an offer</h2>
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
            <p> LOCAL PICKUP ONLY </p>
          </div>
          <div className="item-info">
            <p className="name">Lowest Buy Price</p>
            <form>
              <input className="input" onChange={handleLow}></input>
            </form>
          </div>
          <div className="item-info">
            <p className="name">Highest Buy Price</p>
            <form>
              <input className="input" onChange={handleHigh}></input>
            </form>
          </div>
          <div className="submit-btn">
            <button onClick={setRunBuyer}>Submit</button>
          </div>
        </div>
        {getResult && (
          <div className="modal">
            {/* <h2 className="submitted">{deal}</h2> */}
            <p>Result: {deal ? "DEAL" : "NO DEAL"}</p>
            <p>No pricing information has been shared or will be shared</p>
            {deal && (<p className="address">Matched with 0x3b7aP9...</p>)}
            <p className="desc-2">Continue your conversation on hashchat.</p>
            <div className="submit-btn">
              <a href="https://betav1.hashchat.xyz"><button>Hashchat</button></a>
            </div>
            {/* <p>Raw json: {getResult}</p> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default OfferBid;
