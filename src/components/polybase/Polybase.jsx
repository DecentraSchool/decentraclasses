import React from "react";
import { Polybase } from "@polybase/client";
// import { getWalletClient } from "@wagmi/core";
import { useAccount, usePublicClient, useSignMessage, useWalletClient } from "wagmi";
import { ethPersonalSignRecoverPublicKey } from "@polybase/eth";
import { ethPersonalSign } from "@polybase/eth";
import { ethers } from "ethers";
import { signMessage } from "@wagmi/core";

import { GPTcontent } from "../../constants/chatGPTcontent";
import { solidityCourseContent } from "../../constants/solidityCourseContent";
import { atharava } from "../../constants/instructors/atharava";
import { pathak } from "../../constants/instructors/pathak";
import { VideoEdtingContent } from "../../constants/course/videoEdtingCourse";
import { ContentIntroBC, jaskirat } from "../../constants/course/introBC";
// import { videoEditingCourse } from "../../constants/course/videoEdtingCourse";

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
      // addInstructor(data);
      // deleteCourse(data);
      addContentToCourse(data);
      // addWhatyllearn(data);
      // addRequirements(data);
    },
  });

  const deleteCourse = async (sig) => {
    try {
      db.signer(async (data) => {
        return {
          h: "eth-personal-sign",
          sig: sig,
        };
      });
      const publicKey = await getPublicKey(sig);
      const res = await db.collection("Course").record("2222").call("del");

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const addWhatyllearn = async (sig) => {
    try {
      db.signer(async (data) => {
        return {
          h: "eth-personal-sign",
          sig: sig,
        };
      });
      const publicKey = await getPublicKey(sig);
      const res = await db
        .collection("Course")
        .record("1111")
        .call("setWhatyllearn", [
          [
            "You learn basics of figma with professional tips",
            "Understanding how to create user interface and user experience",
            "Understanding how to create prototypes and wire frame",
            "Learn about ui ux principles",
          ],
        ]);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const addRequirements = async (sig) => {
    try {
      db.signer(async (data) => {
        return {
          h: "eth-personal-sign",
          sig: sig,
        };
      });
      const publicKey = await getPublicKey(sig);
      const res = await db
        .collection("Course")
        .record("1111")
        .call("setRequirements", [
          [
            "Basics knowledge about ui ux design.",
            "One laptop or PC with medium processor.",
            "Nice Internet connection or wifi connection",
          ],
        ]);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const addContentToCourse = async (sig) => {
    try {
      db.signer(async (data) => {
        return {
          h: "eth-personal-sign",
          sig: sig,
        };
      });
      const publicKey = await getPublicKey(sig);
      const res = await db
        .collection("Course")

        .record("2222")
        .call("addCourseContent", [JSON.stringify(GPTcontent)]);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const addInstructor = async (sig) => {
    try {
      db.signer(async (data) => {
        return {
          h: "eth-personal-sign",
          sig: sig,
        };
      });
      const publicKey = await getPublicKey(sig);
      const res = await db.collection("Instructor").create(jaskirat);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

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
    const res = await db
      .collection("Course")
      .create([
        "3333",
        "Blockchain Basics",
        "PROGRAMMING",
        db.collection("Instructor").record("333"),
        "October 4 2023",
        "5",
        "9",
        "https://gateway.lighthouse.storage/ipfs/Qma52WUz1A8Y5Nye6e1iDVQHuTox9SfsBi6e3mqheWeQMc",
        "Explore the world of decentralized ledgers",
        "Blockchain technology is a revolutionary concept that has the potential to transform various industries. It is a distributed ledger that records transactions in a secure and transparent manner. Blockchain technology is used in various applications such as cryptocurrencies, supply chain management, voting systems, and more.",
        ["What is blockchain?", "How blockchain works", "Types of Blockchain,Smart Contract Basics", "What are Dapps"],
        ["Computer or Laptop", "Basic computer skills for smooth navigation.", "Desire to learn."],
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

  return (
    <div>
      <button onClick={() => signMessage()}>Click here</button>
    </div>
  );
};

export default PolybaseHook;
