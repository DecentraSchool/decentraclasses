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
      addCourse(data);
      // updateCourseId(data);
      // addInstructor(data);
      // deleteCourse(data);
      // addContentToCourse(data);
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

        .record("1245")
        .call("addCourseContent", [JSON.stringify(VideoEdtingContent)]);

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
      const res = await db.collection("Instructor").create(pathak);

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
        "1245",
        "Get started with Video Editing",
        "DESIGN",
        db.collection("Instructor").record("8888"),
        "August 28, 2023",
        "2",
        "7",
        "https://gateway.lighthouse.storage/ipfs/QmbUS5nJcEghXd2BCBh7r1b3SFrgVVpS7A5Gxz8fAuZECj",
        "If you're looking to master video editing, our Adobe Premiere Pro course is your gateway to crafting professional videos.",
        "Unleash your creative potential with our Adobe Premiere Pro course. From the basics of importing and editing to advanced motion control and animation, this course is your gateway to crafting professional videos. Get hands-on with industry-standard software, and transform your ideas into compelling visual stories. Perfect for beginners looking to master video editing. Join today and bring your vision to life!",
        [
          "Solid foundation in video editing and learn essential skills to create professional-looking videos",
          "By the end of the course, you will be able to confidently edit, enhance, and transform your raw footage into polished videos that captivate and engage your audience",
        ],
        [
          "Computer or Laptop with minimum of (8gb RAM, i5 or Ryzen 5 CPU, 2gb GPU, 256gb SSD)",
          "Installed Adobe Premiere Pro software  😎",
          "Basic computer skills for smooth navigation.",
          "Desire to learn.",
        ],
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
