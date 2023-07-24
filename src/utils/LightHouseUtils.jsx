import React, { useState } from "react";

import lighthouse from "@lighthouse-web3/sdk";
import CustomFileInput from "./CustomFileInput";
import { Toaster, toast } from "react-hot-toast";

const LightHouseUtils = () => {
  const [selectedFiles, setSelectedFiles] = useState("");
  const [loader, setloader] = useState(false);
  const [percentageDone, setpercentageDone] = useState(0);
  const [uploadedLink, setuploadedLink] = useState([]);

  const progressCallback = (progressData) => {
    let percentageDone = 100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
    setpercentageDone(percentageDone);
  };

  const uploadFile = async (files) => {
    try {
      setloader(true);
      const output = await lighthouse.upload(files, "63ccc274.35143cd239144ead857b013a1b153aaa", progressCallback);
      console.log("File Status:", output);
      /*
        output:
          data: {
            Name: "filename.txt",
            Size: 88000,
            Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
          }
        Note: Hash in response is CID.
      */

      console.log("Visit at https://gateway.lighthouse.storage/ipfs/" + output.data.Hash);
      uploadedLink.push(output.data.Hash);
      setloader(false);
      toast.success("File has been uploaded");
    } catch (error) {
      console.log(error);
      setloader(false);
      setSelectedFiles("");
      toast.error("Something went wrong, Try again!");
    }
  };

  return (
    <div
      style={{ height: "60vh", width: "100%", justifyContent: "center", alignItems: "center" }}
      className="flex justify-center align-middle first-letter flex-col"
    >
      <Toaster position="top-center" reverseOrder={false} />
      <p className="text-center m-10">Light House uploader </p>
      <CustomFileInput setSelectedFiles={setSelectedFiles} selectedFiles={selectedFiles} />
      {loader && (
        <div style={{ width: "300px" }} class="relative pt-1">
          <div class="flex mb-2 items-center justify-between">
            <div class="text-right">
              <span class="text-xs font-semibold inline-block text-pink-600">{percentageDone}%</span>
            </div>
          </div>
          <div class="overflow-hidden h-4 mb-4 text-xs flex rounded bg-pink-200">
            <div
              style={{ width: `${percentageDone}%` }}
              class="shadow-none  flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500 "
            ></div>
          </div>
        </div>
      )}

      <button
        disabled={loader}
        type="button"
        onClick={() => uploadFile(selectedFiles)}
        class="bg-blue-500 mt-5 items-center hover:bg-blue-700 w-32 text-white font-bold py-2 px-4 rounded-full"
      >
        Upload
      </button>
      {uploadedLink.length > 0 && (
        <div>
          <p>Link to the file is:</p>
          {uploadedLink.map((link) => (
            <a target="_blank" href={`https://gateway.lighthouse.storage/ipfs/${link}`}>
              Visit at https://gateway.lighthouse.storage/ipfs/{link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default LightHouseUtils;
