import { useState, useEffect } from "react";
import { auth } from "../shared/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { checkUser } from "../services";
import { useRouter } from "next/router";

const provider = new GoogleAuthProvider();
const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

const signIn = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      const isUserExist = await checkUser(result.user.uid)
      console.log(isUserExist);
      // console.log({ credential, token, user });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // console.log({ errorCode, errorMessage, email, credential });
    });
};

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  const authStateChanged = async (authState) => {
    // console.log(authState);
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      router.push('/')
      return;
    }

    setLoading(true);
    // var formattedUser = formatAuthUser(authState);
    setAuthUser(authState);
    setLoading(false);
  };

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    providers : [
      {
        name: "Google",
        icon: "https://www.svgrepo.com/show/355037/google.svg",
        handle: () => {
          signIn()
        },
      },
      {
        name: "Facebook",
        icon: "/facebook-icon.svg",
        handle: () => {
  
        }
      }
    ],
    signOut: () => {
      signOut(auth)
    },
  };
}
