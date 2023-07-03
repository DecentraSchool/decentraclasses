import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { contractABI, contractAddress } from "../../../contractABI";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

const Card = (props) => {
  const [courseBought, setcourseBought] = useState(false);
  const [userAlreadyBought, setuserAlreadyBought] = useState(false);
  let provider;
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    // rest of your code
  } else {
    toast.warning("Please install MetaMask!");
  }

  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  const getStudentCourses = async () => {
    let arr = [];
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const account = ethers.utils.getAddress(accounts[0]);
    const course = await contract.getCourseByStudent(ethers.utils.getAddress(accounts[0]));
    course[0].forEach((c) => arr.push(c.toString()));
    console.log(props.courseInfo);
    if (arr.includes(props.courseInfo[4].courseid)) {
      setuserAlreadyBought(true);
    } else {
      setuserAlreadyBought(false);
    }
  };

  const handleBuy = async () => {
    try {
      let courseId = props.courseInfo[4].courseid;
      toast("Buying...");

      const price = props.pricepshare;

      // Check if MetaMask is connected
      if (!window.ethereum || !window.ethereum.selectedAddress) {
        toast("Please connect MetaMask");
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractWithSigner = contract.connect(signer);

      let transaction = await contractWithSigner.buyCourse(courseId, 1, {
        value: price,
      });
      await transaction.wait();

      toast.success("Buy successful!");
      setcourseBought(true);
    } catch (error) {
      toast.error("Buy failed:", error);
      console.log(error);
    }
  };

  if (courseBought) {
    setInterval(() => {
      setcourseBought(false);
    }, 5000);
  }

  useEffect(() => {
    getStudentCourses();
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className={`card-body ${props.newClass}`}>
        <div className="card-skeleton">
          {courseBought && (
            <div>
              <Confetti width={window.innerWidth} height={window.innerHeight} />
            </div>
          )}

          <div>
            <img style={{ width: "300px", height: "200px" }} src={props.image} alt="" />
          </div>
          {userAlreadyBought ? (
            <button className="bg-green-400">
              <Link to="/dash">continue to dashboard</Link>{" "}
            </button>
          ) : (
            <button className="bg-yellow-400" onClick={handleBuy}>
              Buy a share
            </button>
          )}

          <ul>
            <li>
              <span style={{ fontSize: "35px" }}>Price per share :{props.pricepshare}</span>
            </li>

            <li>
              <span>Total shares :{props.totalshare}</span>
            </li>
            <li>📽️ {props.dur} hours of video</li>
            <li>📃 {props.anum} articles</li>
            <li>📝 English/Hindi</li>
            <li>📱 Access on mobile</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Card;
