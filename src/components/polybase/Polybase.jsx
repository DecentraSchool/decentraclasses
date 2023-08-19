import React from "react";
import { Polybase } from "@polybase/client";
// import { getWalletClient } from "@wagmi/core";
import { useAccount, usePublicClient, useSignMessage, useWalletClient } from "wagmi";
import { ethPersonalSignRecoverPublicKey } from "@polybase/eth";
import { ethPersonalSign } from "@polybase/eth";
import { ethers } from "ethers";
import { signMessage } from "@wagmi/core";
import { GPTcontent } from "../../constants/chatGPTcontent";

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
      const res = await db
        .collection("Instructor")
        .create([
          "2222",
          "Faraz Rawala",
          "Hi there! My name is Faraz Rawala, and I am a 32-year-old software engineer with seven years of experience in the field. Throughout my career, I have gained valuable knowledge and experience in the digital market and have successfully applied it to my work. Now, I am excited to share my expertise with others and help them get started in this dynamic and exciting field. Join me as we explore the world of internet marketing and discover all that it has to offer.",
          "Software Engineer",
          "https://gateway.lighthouse.storage/ipfs/QmeWvVmMTzkUEzD7ggoiCs8MfXaYpoiGvaLC8ZjLgqnV7t",
        ]);

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
        "2222",
        "Learn Chat GPT from scratch, for free!",
        "AI",
        db.collection("Instructor").record("2222"),
        "August 17, 2023",
        "2",
        "50",
        "https://gateway.lighthouse.storage/ipfs/QmYEtdL8uirHd2L5V3NbehnD52uv5Bq9WTd8fW4NG2C94U",
        "Learn ChatGPT with experienced experts, from basic to advanced level, for free!",
        "ChatGPT is essential to learn for everyone because it is a powerful language model that can generate human-like text and hold natural language conversations with users. Here are a few reasons why ChatGPT is an important tool to learn: \n\n Improved communication: ChatGPT can help individuals communicate more effectively and efficiently. It can generate text that is grammatically correct and contextually relevant, making it an excellent tool for business, education, and personal use.\n\nEnhanced creativity: ChatGPT can also be used to inspire creativity in writing and storytelling. Its ability to generate text on a wide range of topics and in various styles can help individuals explore new ideas and create compelling narratives.\n\nAssistance in research and analysis: ChatGPT can assist in research and analysis by generating summaries, abstracts, and reports. It can also help in data analysis by summarizing large amounts of information in a concise and coherent manner.\n\nAccessibility: ChatGPT can make information more accessible by translating text into multiple languages, generating audio descriptions of visual content, and answering questions in real-time. This can be particularly helpful for individuals with disabilities or those who speak different languages.",
        [
          "Master the many flavors of artificial intelligence",
          "Help you spend less time on weekly administrative duties.",
          "Think on how using Chat GPT might change your grading practices.",
          "Hone your skills as a writer and watch your career grow",
        ],
        ["No prerequisites"],
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
