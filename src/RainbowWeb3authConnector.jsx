import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { Web3Auth } from "@web3auth/modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { TorusWalletConnectorPlugin } from "@web3auth/torus-wallet-connector-plugin";

const name = "Socials Login";
// const iconUrl = "https://web3auth.io/docs/content-hub/logo-ethereum.png";
const iconUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png";

export const rainbowWeb3AuthConnector = ({ chains }) => {
  // Create Web3Auth Instance

  // const clientId = "BMkKHE4n2KgzLWFXDmpCVIpWMggQ8Pe8_4pRkbm9aNafKnn0WRlb1zoy6JlOh2nN2Aw54jIAbFbsAUut3tuJr8w";
  // const clientId = "BEiKywx7OIUl832MkrJekbhIGEq78pgkdLOYFhAz0aamsGLXPqInKea2MV33-J3AkoSRJ46_7Tm48yZwug7QsH8";
  const clientId = "BCUIf4lI2Zbrd_xE-ZKigU9ptoF61GrzRuZJ_QBCNiAHqFtI4DXT62xD1lHW1e4kxqwVs_FpxZxy-e_FfzoU0eY";
  const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x" + chains[0].id.toString(16),
    rpcTarget: chains[0].rpcUrls.default.http[0], // This is the public RPC we have added, please pass on your own endpoint while creating an app
    displayName: chains[0].name,
    tickerName: chains[0].nativeCurrency?.name,
    ticker: chains[0].nativeCurrency?.symbol,
    blockExplorer: chains[0].blockExplorers?.default.url[0],
  };
  const web3AuthInstance = new Web3Auth({
    clientId: clientId,
    chainConfig,
    uiConfig: {
      theme: "dark",
      loginMethodsOrder: ["google", "facebook"],
      defaultLanguage: "en",
      appLogo: "https://gateway.lighthouse.storage/ipfs/QmWBJkyq3tsod47zP9jHUNH89GYBLa35N6SSqLXussGH4r", // Your App Logo Here
      modalZIndex: "2147483647",
    },
    web3AuthNetwork: "aqua",
  });

  // Add openlogin adapter for customisations
  const privateKeyProvider = new EthereumPrivateKeyProvider({ config: { chainConfig } });
  const openloginAdapterInstance = new OpenloginAdapter({
    privateKeyProvider,
    adapterSettings: {
      network: "aqua",
      uxMode: "redirect",
      whiteLabel: {
        name: "Decentraclasses",
        logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
        logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
        defaultLanguage: "en",
        dark: true, // whether to enable dark mode. defaultValue: false
      },
    },
  });
  web3AuthInstance.configureAdapter(openloginAdapterInstance);

  // Add Torus Wallet Plugin
  const torusPlugin = new TorusWalletConnectorPlugin({
    torusWalletOpts: {
      buttonPosition: "bottom-left",
    },
    walletInitOptions: {
      whiteLabel: {
        theme: { isDark: false, colors: { primary: "#00a8ff" } },
        logoDark: iconUrl,
        logoLight: iconUrl,
      },
      useWalletConnect: true,
      enableLogging: true,
    },
  });
  web3AuthInstance.addPlugin(torusPlugin);
  return {
    id: "web3auth",
    name,
    iconUrl,
    iconBackground: "#fff",
    createConnector: () => {
      const connector = new Web3AuthConnector({
        chains: chains,
        options: {
          web3AuthInstance,
        },
      });
      return {
        connector,
      };
    },
  };
};
