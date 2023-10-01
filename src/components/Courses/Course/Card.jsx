import { ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { contractABI, contractAddress } from "../../../contractABI";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import { useAccount, useSignMessage } from "wagmi";
import { buyCourse } from "../../../utils/PolybaseUtils";
import { ParentContext } from "../../../contexts/ParentContext";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./Card.css";
import { PeraWalletConnect } from "@perawallet/connect";
import algosdk from "algosdk";

const Card = (props) => {
  // console.log(JSON.parse(props?.courseInfo?.content));

  // const [courseBought, setcourseBought] = useState(false);

  const {
    isConnectedToPeraWallet,
    accountAddress,
    courseBought,
    setAccountAddress,
    handleDisconnectWalletClick,
    handleConnectWalletClick,
    setcourseBought,
  } = useContext(ParentContext);

  const [userAlreadyBought, setuserAlreadyBought] = useState(false);
  const { address, isConnected } = useAccount();
  const [loader, setloader] = useState(false);
  const peraWallet = new PeraWalletConnect();

  // const algodToken = "a".repeat(64);
  // const algodServer = "http://localhost";
  // const algodPort = 5173;

  const signPeraSign = async () => {
    try {
      const algodToken = "a".repeat(64);
      const algodServer = "http://localhost";
      const algodPort = 5173;

      const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
      // console.log(algodClient);
      // const acctInfo = await algodClient.accountInformation(accountAddress).do();
      // console.log(`Account balance: ${acctInfo.amount} microAlgos`);

      const suggestedParams = await algodClient.getTransactionParams().do();
      // const optInTxn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      //   from: accountAddress,
      //   to: accountAddress,
      //   assetIndex: 1,
      //   amount: 0,
      //   suggestedParams,
      // });

      // const singleTxnGroups = [{ txn: optInTxn, signers: [accountAddress] }];
      // const signedTxn = await peraWallet.signTransaction([singleTxnGroups]);
      // console.log(signedTxn);
    } catch (error) {
      console.log("Couldn't sign Opt-in txns", error);
    }
  };

  const {
    data: sig,
    isError,
    isLoading,
    isSuccess,
    signMessage,
  } = useSignMessage({
    message: "gm wagmi frens",
    onSuccess(data) {
      const res = buyCourse(
        data,
        props.courseInfo.id,
        address,
        setcourseBought,
        props?.courseInfo?.courseName,
        props?.courseInfo?.imageurl,
      );

      setloader(false);
    },
  });

  const getUserStatus = async () => {
    if (props?.courseInfo?.usersBrought?.includes(address)) {
      setuserAlreadyBought(true);
    } else {
      setuserAlreadyBought(false);
    }
  };

  const handleBuy = async () => {
    try {
      setloader(true);
      console.log("called handle buy");
      const res = buyCourse(
        "data",
        props.courseInfo.id,
        address,
        setcourseBought,
        props?.courseInfo?.courseName,
        props?.courseInfo?.imageurl,
        sendNotification
      );
      console.log(res);
      // const res = await signMessage();
      // console.log(res);
      // setcourseBought(true);
    } catch (error) {
      setcourseBought(false);
      setloader(false);
    }
  };

  // console.log(props.courseInfo);/

  if (courseBought) {
    setInterval(() => {
      setcourseBought(false);
    }, 5000);
  }

  useEffect(() => {
    getUserStatus();
  }, [props.courseInfo.usersBrought, address, loader]);

  // console.log(address);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className={`card-body ${props.newClass} h-fit shadow-xl`}>
        <div className="card-skeleton">
          {courseBought && (
            <div>
              <Confetti width={window.innerWidth} height={window.innerHeight} />
            </div>
          )}

          <div>
            <img style={{ width: "100%", height: "300px", objectFit: "contain" }} src={props.image} alt="" />
          </div>
          {props.courseInfo.id == "0000" || props.courseInfo.id == "2222" ? (
            <button className="btn btn-1 btn-1e">Coming soon</button>
          ) : userAlreadyBought ? (
            <button className="bg-green-400">
              <Link to={`/workplace?userId=${address}&courseId=${props.courseInfo.id}`}>continue to dashboard</Link>{" "}
            </button>
          ) : loader ? (
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          ) : isConnectedToPeraWallet ? (
            <button
              className="bg-yellow-400 "
              onClick={() => {
                buyCourse(
                  0x4793f5ba7c4b8760177d728712b46226693e68f17611ddad2a095fae5f6d3134096fa0ab32865e8897963b500c59647db362ca047725a6fe98afba571fb0b35d1b,
                  props.courseInfo.id,
                  address,
                  setcourseBought,
                  props?.courseInfo?.courseName,
                  props?.courseInfo?.imageurl
                );
              }}
            >
              Start course
            </button>
          ) : (
            <div>Please Connect to Pera Wallet</div>
          )}

          {/* <ul>
            <li>
              <span className="text-[20px] md:text-xl">Price per share : {props.pricepshare}</span>
            </li>

            <li>
              <span>Total shares : {props.totalshare}</span>
            </li>
            <li>📽️ {props.dur} hours of video</li>
            <li>📃 {props.anum} articles</li>
            <li>📝 English/Hindi</li>
            <li>📱 Access on mobile</li>
          </ul> */}
        </div>
      </section>
    </>
  );
};

export default Card;
