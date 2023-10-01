import { createContext, useState, useEffect } from "react";
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";
import { PeraWalletConnect } from "@perawallet/connect";

export const ParentContext = createContext();

export const ParentProvider = ({ children }) => {
  const PK = import.meta.env.VITE_push_channel_private_key;
  console.log(PK);
  const Pkey = `0x${PK}`;
  const _signer = new ethers.Wallet(Pkey);
  console.log(PK);
  const peraWallet = new PeraWalletConnect();
  const sendNotification = async ({ title, body, img }) => {
    try {
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer: _signer,
        type: 1, // broadcast
        identityType: 2, // direct payload
        notification: {
          title: `New Notification from Decentraclasses 🧑‍🏫`,
          body: ``,
        },
        payload: {
          title: `${title}`,
          body: `${body}`,
          cta: "",
          img: img,
        },
        channel: "eip155:5:0x53EC7AaB4dbEC2b0912577E549758615A08cb172", // your channel address
        env: "staging",
      });
      console.log(apiResponse);
    } catch (err) {
      console.error("Error: ", err);
    }
  };
  const [courseBought, setcourseBought] = useState(false);

  //PERA WALLET LOGIC

  function handleConnectWalletClick() {
    peraWallet
      .connect()
      .then((newAccounts) => {
        // Setup the disconnect event listener
        peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);

        setAccountAddress(newAccounts[0]);
      })
      .reject((error) => {
        // You MUST handle the reject because once the user closes the modal, peraWallet.connect() promise will be rejected.
        // For the async/await syntax you MUST use try/catch
        if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
          // log the necessary errors
        }
      });
  }

  function handleDisconnectWalletClick() {
    peraWallet.disconnect();
    setAccountAddress(null);
  }

  const [accountAddress, setAccountAddress] = useState("");
  // Check app is connected with Pera Wallet
  const isConnectedToPeraWallet = !!accountAddress;

  useEffect(() => {
    // Reconnect to the session when the component is mounted
    peraWallet.reconnectSession().then((accounts) => {
      // Setup the disconnect event listener
      peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);

      if (peraWallet.isConnected && accounts.length) {
        setAccountAddress(accounts[0]);
      }
    });
  }, []);
  console.log(accountAddress);

  return (
    <ParentContext.Provider
      value={{
        courseBought,
        isConnectedToPeraWallet,
        accountAddress,
        setcourseBought,
        setAccountAddress,
        handleDisconnectWalletClick,
        handleConnectWalletClick,
        setcourseBought,
        sendNotification,
      }}
    >
      {children}
    </ParentContext.Provider>
  );
};
