import "./init";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { publicProvider } from "wagmi/providers/public";
import {
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  // talismanWallet,
  metaMaskWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { WagmiConfig, configureChains, createConfig, createStorage } from "wagmi";
import { mainnet, optimism, zora, polygon, polygonMumbai, goerli } from "wagmi/chains";
import { RainbowKitProvider, connectorsForWallets, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { InjectedConnector } from "@wagmi/core";
import "@rainbow-me/rainbowkit/styles.css";
import { ParentProvider } from "./contexts/ParentContext";
import { PolybaseProvider } from "@polybase/react";
import { Polybase } from "@polybase/client";
import ScrollToTop from "./ScrollToTop";
import { HuddleProvider, HuddleClient } from '@huddle01/react';
// import { rainbowWeb3AuthConnector } from "./RainbowWeb3authConnector";
import { ArcanaRainbowConnector } from "./ArcanaRainbowConnector";
// import { connectors } from "./RainbowWeb3authConnector";
export const Mantle = {
  id: 5001,
  name: "Mantle",
  network: "Mantle",
  nativeCurrency: {
    decimals: 18,
    name: "Mantle",
    symbol: "MNT",
  },
  rpcUrls: {
    public: { http: ["https://rpc.testnet.mantle.xyz/"] },
    default: { http: ["https://rpc.testnet.mantle.xyz/"] },
  },
  blockExplorers: {
    etherscan: { name: "Mantle", url: "https://explorer.testnet.mantle.xyz/" },
    default: { name: "Mantle", url: "https://explorer.testnet.mantle.xyz/" },
  },
  contracts: {
    multicall3: {
      address: "0xc1dC2d65A2243c22344E725677A3E3BEBD26E604",
      blockCreated: 11_907_934,
    },
  },
};

const huddleClient = new HuddleClient({
 
  
  projectId: "nZQLa4vHNKMBb88-8lujwm6oJIh9jmjZ",
  options: {
    // `activeSpeakers` will be most active `n` number of peers, by default it's 8
    activeSpeakers: {
      size: 12,
    },
  },
});

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [polygon, polygonMumbai, Mantle],
//   [publicProvider()]
// );
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli, polygonMumbai, polygon],
  [alchemyProvider({ apiKey: "7wSu45FYTMHUO4HJkHjQwX4HFkb7k9Ui" }), publicProvider()]
);

const projectId = "b2024bb978e05dbfcd98d3ca8318ee07";

const polybase = new Polybase();
// const wagmiEntity = createConfig({
//   connectors: connectors(chains),
//   autoConnect: true});



// const { connectors } = getDefaultWallets({
//   projectId: projectId,
//   appName: "decentraschool",
//   chains,
// });

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      ArcanaRainbowConnector({ chains }),
      // injectedWallet({ chains }),
      // rainbowWeb3AuthConnector({ chains }),
      rainbowWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
      // talismanWallet({ chains }),
      metaMaskWallet({ chains, projectId }),
    ],
  },
]);

const wagmiEntity = createConfig({
  connectors: connectors(chains),
  autoConnect: true,
  publicClient,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
  storage: createStorage({ storage: window.localStorage }),
  // connectors: publicClient,
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiConfig config={wagmiEntity}>
    <RainbowKitProvider chains={chains}>
      <ParentProvider>
        <BrowserRouter>
          <PolybaseProvider polybase={polybase}>
            <HuddleProvider client={huddleClient}>

              <ScrollToTop />
              <App />
            </HuddleProvider>
          </PolybaseProvider>
        </BrowserRouter>
      </ParentProvider>
    </RainbowKitProvider>
  </WagmiConfig>
);
