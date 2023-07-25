import { ref, onValue } from "firebase/database";
import { database } from "../shared/firebase";
import { useState, useEffect } from "react";

let cache = {};

export const useUserInfo = async (uid) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!data);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!cache[uid]) {
      cache = {};
    }
    try {
      onValue(
        ref(database, "users/" + uid),
        (snapshot) => {
          if (snapshot.val()) {
            cache = snapshot.val();
            setData(cache);
            setLoading(false);
            setError(false);
          } else {
            setData(null);
            setLoading(false);
            setError(true);
          }
        },
        {
          onlyOnce: true,
        }
      );
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }, [uid]);

  return {
    data,
    loading,
    error,
  };
};
