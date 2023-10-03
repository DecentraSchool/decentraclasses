// Set up Arcana Auth 

import { AuthProvider } from "@arcana/auth";

let auth = null;

export const getAuthProvider = () => {
  if (!auth) {
    auth = new AuthProvider(
      "xar_test_659c33951c1150fb0a7dd957c2b06f496ae9be28"
    );
  }
  return auth;
};
