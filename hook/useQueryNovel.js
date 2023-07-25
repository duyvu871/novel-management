import {
  ref,
  onValue,
  query,
  endAt,
  orderByChild,
  orderByKey,
  limitToLast,
  
} from "firebase/database";
import { database } from "../shared/firebase";
import { useState, useEffect } from "react";

export const useQueryEpisodes = (numberOfEpisode) => {
  const [data, setData] = useState(null);
  const [numberToLast, setNumberToLast] = useState(numberOfEpisode);
  const [loading, setLoading] = useState(!data);
  const [error, setError] = useState(false);
  const currentTime = new Date().getTime();
  useEffect(() => {
    try {
      const relateEpisodes = onValue(
        query(
          ref(database, "novels/"),
          orderByChild("last_changed/time"),
          endAt(currentTime),
          limitToLast(numberToLast)
        ),
        (snapshot) => {
          console.log("Get data again");

          if (snapshot.val()) {
            setData(snapshot.val());
            setLoading(false);
            setError(false);
            return;
          }
          setLoading(false);
          setError(true);
          return;
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
  }, [numberToLast]);

  return {
    data,
    setNumberToLast,
    loading,
    error,
  };
};
