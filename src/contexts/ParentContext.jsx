import { createContext, useState } from "react";
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

export const ParentContext = createContext();

export const ParentProvider = ({ children }) => {
  const PK = import.meta.env.VITE_push_channel_private_key;
  console.log(PK);
  const Pkey = `0x${PK}`;
  const _signer = new ethers.Wallet(Pkey);
  console.log(PK);
  const sendNotification = async ({ title, body, img }) => {
    try {
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer: _signer,
        type: 1, // broadcast
        identityType: 2, // direct payload
        notification: {
          title: `New Notification from Decentraclasses 🧑‍🏫`,
          body: ``,
        },
        payload: {
          title: `${title}`,
          body: `${body}`,
          cta: "",
          img: img,
        },
        channel: "eip155:5:0x53EC7AaB4dbEC2b0912577E549758615A08cb172", // your channel address
        env: "staging",
      });
      console.log(apiResponse);
    } catch (err) {
      console.error("Error: ", err);
    }
  };
  const [courseBought, setcourseBought] = useState(false);
  return (
    <ParentContext.Provider value={{ courseBought, setcourseBought, sendNotification }}>
      {children}
    </ParentContext.Provider>
  );
};
