const configs = {
    firebaseConfig: {
        projectId: process.env.NEXTAUTH_FIREBASE_PROJECT_ID,
        apiKey: process.env.NEXTAUTH_FIREBASE_API_KEY,
        appId: process.env.NEXTAUTH_FIREBASE_APP_ID,
        authDomain: process.env.NEXTAUTH_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.NEXTAUTH_FIREBASE_DATABASE_URL,
        storageBucket: process.env.NEXTAUTH_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXTAUTH_FIREBASE_MESSAGING_SENDER_ID,
        measurementId: process.env.NEXTAUTH_FIREBASE_MEASUREMENT_ID
      }
      
  };

  export default configs;