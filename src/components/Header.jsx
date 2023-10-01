import React from "react";
import { ethers } from "ethers";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { PeraWalletConnect } from "@perawallet/connect";

export default function Header() {

  const [account, setAccount] = useState(null);
  const coursesRef = useRef(null);

  const scrollToCourses = () => {
    coursesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };
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

  const [accountAddress, setAccountAddress] = (useState < string) | (null > null);
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

  return (
    <header>
      <nav className="container px-10 py-20 flex justify-between items-center">
        <div>
          <a href="/">
            <img src="/images/logo1.png" alt="Logo" className=" w-[225px] h-[32px]" />
          </a>
        </div>

        <ul className="flex gap-16 items-center font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            {/* <ConnectButton /> */}
            <button onClick={isConnectedToPeraWallet ? handleDisconnectWalletClick : handleConnectWalletClick}>
              {isConnectedToPeraWallet ? "Disconnect" : "Connect to Pera Wallet"}
            </button>
          </li>
          {/* <li>
            {account ? (
              <button type="button" className="font-bold bg-purple-300 rounded px-3 py-2  text-white">
                {account.slice(0, 5) + "..." + account.slice(38, 42)}
              </button>
            ) : (
              <button type="button" className="bg-[#03A9F4] w-[108px] rounded-full h-[32px]" onClick={connectHandler}>
                Register
              </button>
            )}
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
