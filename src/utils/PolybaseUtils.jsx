import React from "react";
import { Polybase } from "@polybase/client";
import { useAccount, usePublicClient, useSignMessage, useWalletClient } from "wagmi";
import { ethPersonalSignRecoverPublicKey } from "@polybase/eth";
import { ethPersonalSign } from "@polybase/eth";
import { ethers } from "ethers";
import { signMessage } from "@wagmi/core";

export const db = new Polybase({
  defaultNamespace:
    "pk/0xd85260a9fbe3be03bbdb83c396ca4f7d4527dda763ddc8f419c18b5c5855d584d007cd80f833b20f1e834d0129426d74f5d11fc65ce862d3154382a728388e0f/decentra",
});

// export const {
//   data: sig,
//   isError,
//   isLoading,
//   isSuccess,
//   signMessage: addNewCourse,
// } = useSignMessage({
//   message: "Decentraschool",
//   onSuccess(data) {
//     addCourse(data);
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

export const getPublicKey = async (sig) => {
  const publicKey65Bytes = ethPersonalSignRecoverPublicKey(sig, "Decentraschool");
  const publicKey64Bytes = "0x" + publicKey65Bytes.slice(4);
  return publicKey64Bytes;
};

const addCourse = async (sig) => {
  try {
    db.signer(async (data) => {
      return {
        h: "eth-personal-sign",
        sig: sig,
      };
    });
    const publicKey = await getPublicKey(sig);
    const res = await db.collection("Course").create([
      "1010",
      "Full Stack development Course",
      "DecenteraSchool",
      "January 15, 2023",
      "10",
      "20.5",
      "5",
      "https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png.webp",
      "Become a full stack developer and launch your apps quickly",
      "Learn about React, Angular, Python and more",
      // This is referencing the User collection
    ]);

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
