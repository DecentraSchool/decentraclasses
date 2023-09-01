import React from "react";
import { Polybase } from "@polybase/client";
import { useAccount, usePublicClient, useSignMessage, useWalletClient } from "wagmi";
import { ethPersonalSignRecoverPublicKey } from "@polybase/eth";
import { ethPersonalSign } from "@polybase/eth";
import { ethers } from "ethers";
import { signMessage } from "@wagmi/core";
import { toast } from "react-hot-toast";

export const db = new Polybase({
  defaultNamespace:
    "pk/0xd85260a9fbe3be03bbdb83c396ca4f7d4527dda763ddc8f419c18b5c5855d584d007cd80f833b20f1e834d0129426d74f5d11fc65ce862d3154382a728388e0f/decentra",
});

// export const {
//   data: sig,
//   isError,
//   isLoading,
//   isSuccess,
//   signMessage,
// } = useSignMessage({
//   message: "Decentraschool",
//   onSuccess(data) {
//     addInstructor(data);
//   },
// });

export const getAllCourses = async () => {
  const records = await db.collection("Course").get();
  return records.data;
};

export const getCoursebyId = async (id) => {
  const record = db.collection("Course").record(id).get();
  return record;
};

export const getInstructorById = async (id) => {
  const record = db.collection("Instructor").record(id).get();
  return record;
};


export const buyCourse = async (sig, courseId, address, setcourseBought, courseName, img, sendNotification) => {
  // const { courseBought, setcourseBought } = useContext(ParentContext);c

  try {
    db.signer(async (data) => {
      return {
        h: "eth-personal-sign",
        sig: sig,
      };
    });
    // const publicKey = await getPublicKey(sig);
    const res = await db.collection("Course").record(courseId).call("addUserToCourse", [address]);
    console.log(res);
    toast.success("Course Successfully brought - Lets Learn");
    setcourseBought(true);
    sendNotification({
      title: "Hurray🎉 new accomplishment",
      body: `You have successfully brought ${courseName},\n What are you waiting for lets learn!!!`,
      img: img,
    });
    return true;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong! Please try again");
    setcourseBought(false);
    return false;
  }
};

export const getPublicKey = async (sig) => {
  const publicKey65Bytes = ethPersonalSignRecoverPublicKey(sig, "Decentraschool");
  const publicKey64Bytes = "0x" + publicKey65Bytes.slice(4);
  return publicKey64Bytes;
};
