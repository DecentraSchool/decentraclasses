import React from "react";
import { Polybase } from "@polybase/client";
// import { getWalletClient } from "@wagmi/core";
import { useAccount, usePublicClient, useSignMessage, useWalletClient } from "wagmi";
import { ethPersonalSignRecoverPublicKey } from "@polybase/eth";
import { ethPersonalSign } from "@polybase/eth";
import { ethers } from "ethers";
import { signMessage } from "@wagmi/core";

const db = new Polybase({
  defaultNamespace:
    "pk/0xd85260a9fbe3be03bbdb83c396ca4f7d4527dda763ddc8f419c18b5c5855d584d007cd80f833b20f1e834d0129426d74f5d11fc65ce862d3154382a728388e0f/decentra",
});

// addCourse();

const PolybaseHook = () => {
  const walletClient = useWalletClient();
  // const account = useAccount();
  // const provider = usePublicClient();
  // console.log(account.address);
  // console.log(walletClient);

  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const signer = provider.getSigner();
  // console.log(provider);
  // console.log(signer);
  const {
    data: sig,
    isError,
    isLoading,
    isSuccess,
    signMessage,
  } = useSignMessage({
    message: "gm wagmi frens",
    onSuccess(data) {
      // console.log(data);
      // addCourse(data);
      // updateCourseId(data);
      addContent(data);
    },
  });

  const getPublicKey = async (sig) => {
    console.log(sig);
    const publicKey65Bytes = ethPersonalSignRecoverPublicKey(sig, "gm wagmi frens");
    // Now it can be used with Polybase
    const publicKey64Bytes = "0x" + publicKey65Bytes.slice(4);
    // const publicKey64Bytes = ethers.utils.recoverPublicKey("gm wagmi frens", sig);
    console.log(publicKey64Bytes);
    return publicKey64Bytes;
  };

  const addCourse = async (sig) => {
    db.signer(async (data) => {
      return {
        h: "eth-personal-sign",
        sig: sig,
      };
    });
    const publicKey = await getPublicKey(sig);
    const res = await db.collection("Course").create([
      "2222",
      "Solidity development Course",
      "DecenteraSchool",
      "January 15, 2023",
      "20",
      "20.5",
      "10",
      "https://tintinweb.gallerycdn.vsassets.io/extensions/tintinweb/vscode-solidity-flattener/0.0.11/1647941306788/Microsoft.VisualStudio.Services.Icons.Default",
      "The Complete Solidity Course - Blockchain - Zero to Expert",
      "Master Solidity and Smart Contracts - Blockchain Development: 2023 - Programming & Ethereum - Code Along - DApplications",
      // This is referencing the User collection
    ]);

    console.log(res);
  };

  const updateCourseId = async (sig) => {
    db.signer(async (data) => {
      return {
        h: "eth-personal-sign",
        sig: sig,
      };
    });
    const publicKey = await getPublicKey(sig);
    const res = await db.collection("Course").record("1010").call("setCourseId", ["1111"]);

    console.log(res);
  };

  const data = [
    {
      title: "Introduction",
      videoUrl: "https://youtu.be/GWUwFDFOipo",
      completed: false,
    },
    {
      title: "Basics",
      videoUrl: "https://youtu.be/jj299iVoKwc",
      completed: false,
    },
    {
      title: "Gettings Started",
      videoUrl: "https://youtu.be/cFRj2-jzm8E",
      completed: false,
    },
  ];

  const addContent = async (sig) => {
    db.signer(async (data) => {
      return {
        h: "eth-personal-sign",
        sig: sig,
      };
    });
    const res = await db
      .collection("Course")
      .record("2222")
      .call("addContent", [JSON.stringify(data)]);
    console.log(res);
  };

  console.log(typeof JSON.stringify(data));

  return (
    <div>
      <button onClick={() => signMessage()}>Click here</button>
    </div>
  );
};

export default PolybaseHook;
