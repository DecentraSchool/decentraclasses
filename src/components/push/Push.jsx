import React from "react";
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

// sendNotification();

const Push = () => {
  // const PK = process.env.push_channel_private_key; // channel private key
  const PK = import.meta.env.VITE_push_channel_private_key;
  console.log(PK); // channel private key
  const Pkey = `0x${PK}`;
  const _signer = new ethers.Wallet(Pkey);
  console.log(PK);
  const sendNotification = async () => {
    try {
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer: _signer,
        type: 1, // broadcast
        identityType: 2, // direct payload
        notification: {
          title: `[SDK-TEST] notification TITLE:`,
          body: `[sdk-test] notification BODY`,
        },
        payload: {
          title: `[sdk-test] payload title`,
          body: `sample msg body`,
          cta: "",
          img: "",
        },
        channel: "eip155:5:0x53EC7AaB4dbEC2b0912577E549758615A08cb172", // your channel address
        env: "staging",
      });
      console.log(apiResponse);
    } catch (err) {
      console.error("Error: ", err);
    }
  };
  return (
    <div>
      <button onClick={sendNotification}>Click to send notification</button>
    </div>
  );
};

export default Push;
