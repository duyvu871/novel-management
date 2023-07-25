import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { getApp, getApps, initializeApp } from "firebase/app";

import jwt from "jsonwebtoken"
import {
  getFirestore,
  query,
  getDocs,
  getDoc,
  collection,
  where,
  addDoc,
  updateDoc,
  limit,
  doc,
  deleteDoc,
  runTransaction,
} from "firebase/firestore";
// import { firestore } from "../../../shared/firebase"
import configs from "../../../shared/configs";

async function refreshAccessToken(token) {
  try {
    const url =
      "https://oauth2.googleapis.com/token?" +
      new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken
      });

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError"
    };
  }
}


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
  adapter: FirestoreAdapter({
    ...configs.firebaseConfig,
    emulator: {
      host: "localhost",
      port: 3000,
    },
  }),
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,

    async encode({ secret, token }) {
      return jwt.sign(token, secret);
    },
    async decode({ secret, token }) {
      return jwt.verify(token, secret);
    },
  },
  session: {
    // strategy: 'jwt',
    jwt: true
  },
  callbacks: {
    // async signIn({ account, profile }) {
    //   if (account.provider === "google") {
    //     return profile.email_verified && profile.email.endsWith("@gmail.com")
    //   }
    //   console.log("profile", profile);
    //   console.log("account", account);
    //   return true // Do different verification for other providers that don't have `email_verified`
    // },
    async jwt(token, account) {
      if (account ?.accessToken) {
        token.accessToken = account.accessToken
      }
      console.log("account", account);

      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.error = token.error;
      
      console.log(session)
      return Promise.resolve(session);
    },
  },
});
