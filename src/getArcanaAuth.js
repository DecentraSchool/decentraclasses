// Set up Arcana Auth 

import { AuthProvider } from "@arcana/auth";

let auth = null;

export const getAuthProvider = () => {
  if (!auth) {
    auth = new AuthProvider(
      "xar_test_0e7cf2a3939e758138a11e1a84365d81a32d5e55"
    );
  }
  return auth;
};
