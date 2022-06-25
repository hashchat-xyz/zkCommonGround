import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
// import ConnectWallet from "./pages/ConnectWallet";
import ConnectWalletDemo from "../src/pages/ConnectWalletDemo";
import Home from "../src/pages/Home";
import OfferBid from "../src/pages/OfferBid";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains} theme={darkTheme()}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* <Route path="/connectwallet" element={<ConnectWallet />} /> */}
            <Route path="/connectwalletdemo" element={<ConnectWalletDemo />} />
            <Route path="/home" element={<Home />} />
            <Route path="/offerbid" element={<OfferBid />} />
          </Routes>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
