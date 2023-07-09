import "./init";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { publicProvider } from "wagmi/providers/public";
import { WagmiConfig, configureChains, createConfig, createStorage } from "wagmi";
import { mainnet, optimism, zora, polygon, polygonMumbai } from "wagmi/chains";
import { RainbowKitProvider, connectorsForWallets, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { InjectedConnector } from "@wagmi/core";
import "@rainbow-me/rainbowkit/styles.css";
import { ParentProvider } from "./contexts/ParentContext";

const { chains, publicClient, webSocketPublicClient } = configureChains([polygon, polygonMumbai], [publicProvider()]);

const projectId = "b2024bb978e05dbfcd98d3ca8318ee07";

const { connectors } = getDefaultWallets({
  projectId: projectId,
  appName: "decentraschool",
  chains,
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
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}>
      <ParentProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ParentProvider>
    </RainbowKitProvider>
  </WagmiConfig>
);
