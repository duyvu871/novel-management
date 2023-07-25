import { createContext, useContext, Context, useEffect } from "react";
import useFirebaseAuth from "../hook/useFirebaseAuth";
import { auth } from "../shared/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";

const authUserContext = createContext();

export function AuthUserProvider({ children }) {
  const authState = useFirebaseAuth();
  const router = useRouter
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // const uid = user.uid;
            // console.log({ uid });
        } else {
        
            console.log("no user");
        }
    });
}, []);

  return (
    <authUserContext.Provider value={authState}>{children}</authUserContext.Provider>
  );
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);
