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

const Card = (props) => {
  // console.log(JSON.parse(props?.courseInfo?.content));

  // const [courseBought, setcourseBought] = useState(false);
  const { courseBought, setcourseBought, sendNotification } = useContext(ParentContext);

  const [userAlreadyBought, setuserAlreadyBought] = useState(false);
  const { address, isConnected } = useAccount();
  const [loader, setloader] = useState(false);
  // let provider;
  // if (window.ethereum) {
  //   provider = new ethers.providers.Web3Provider(window.ethereum);
  // } else {
  //   toast("Please install MetaMask!");
  // }

  // const contract = new ethers.Contract(contractAddress, contractABI, provider);

  // const getStudentCourses = async () => {
  //   let arr = [];
  //   const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  //   const account = ethers.utils.getAddress(accounts[0]);
  //   const course = await contract.getCourseByStudent(ethers.utils.getAddress(accounts[0]));

  //   course[0].forEach((c) => arr.push(c.toString()));
  //   console.log(props.courseInfo);
  //   console.log(arr);

  //   if (arr.includes(props.courseInfo.id)) {
  //     setuserAlreadyBought(true);
  //   } else {
  //     setuserAlreadyBought(false);
  //   }
  // };

  // const handleBuy = async () => {
  //   try {
  //     let courseId = props.courseInfo.id;
  //     toast("Buying...");

  //     const price = props.pricepshare;

  //     // Check if MetaMask is connected
  //     if (!window.ethereum || !window.ethereum.selectedAddress) {
  //       toast("Please connect MetaMask");
  //     }

  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contractWithSigner = contract.connect(signer);

  //     let transaction = await contractWithSigner.buyCourse(courseId, 1, {
  //       value: 100,
  //     });
  //     await transaction.wait();

  //     toast.success("Buy successful!");
  //     setcourseBought(true);
  //   } catch (error) {
  //     toast.error("Buy failed:", error);
  //     console.log(error);
  //   }
  // };

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
        sendNotification
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
      const res = await signMessage();
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
          ) : isConnected ? (
            <button className="bg-yellow-400 " onClick={handleBuy}>
              Start course
            </button>
          ) : (
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== "loading";
                const connected =
                  ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");

                return (
                  <div style={{ width: "100%" }}>
                    {(() => {
                      if (!connected) {
                        return (
                          <button
                            onClick={openConnectModal}
                            type="button"
                            class="text-gray-900 w-full bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                            Login to continue
                          </button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <button onClick={openChainModal} type="button">
                            Wrong network
                          </button>
                        );
                      }
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
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
