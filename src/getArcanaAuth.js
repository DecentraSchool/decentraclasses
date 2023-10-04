// Set up Arcana Auth 

import { AuthProvider } from "@arcana/auth";

let auth = null;

export const getAuthProvider = () => {
  if (!auth) {
    auth = new AuthProvider(
      "xar_live_00993684b005dcfc69e10df5ea70662682b6268a"
    );
  }
  return auth;
};
