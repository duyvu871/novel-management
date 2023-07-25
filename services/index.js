import { async } from "@firebase/util";
import {
  onValue,
  ref,
  orderByChild,
  orderByKey,
  orderByValue,
  endAt,
  limitToLast,
  get,
  child,
  query,
  equalTo,
  set
} from "firebase/database";
import { database } from "../shared/firebase";

export async function getNovelById(id) {
  const dbRef = ref(database);
  const req = await get(child(dbRef, "novels/" + id)).then((res) => {
    if (res.exists()) {
      return res.val();
    }
  });

  //   console.log(result);
  return req || null;
}
export async function getNovelWithListId(list) {
  const req = await Promise.all(list.map((item) => getNovelById(item)));
  return req || null;
}

export async function getUserById(id) {
  const dbRef = ref(database);
  const req = await get(child(dbRef, "users/" + id)).then((res) => {
    if (res.exists()) {
      return res.val();
    }
  });

  return req || null;
}

export async function getRecentNovel(currentTime, numberToLast) {
  const req = await get(
    query(
      ref(database, "novels/"),
      orderByChild("last_changed/time"),
      endAt(currentTime),
      limitToLast(numberToLast)
    )
  ).then((res) => {
    if (res.exists()) {
      return res.val();
    }

    return null;
  });

  return req || null;
}

export async function getHistory() {
  const req = await get(
    query(ref(database, "histories/" + id), limitToLast(10))
  ).then((res) => (res.exists() ? res.val() : null));
  return req || null;
}

export async function getHistoriesWithListId(list) {
  const req = await Promise.all(list.map((item) => getHistory(item)));
  return req || null;
}

export async function getEpisode(id) {
  const req = await get(query(ref(database, "episodes/" + id))).then((res) =>
    res.exists() ? res.val() : null
  );
  return req || null;
}

export async function getEpisodesWithListId(list) {
  const req = await Promise.all(list.map((item) => getEpisode(item)));

  return req || null;
}

export async function getRecentHistories(uid, range = 10) {
  const req = await get(
    query(
      ref(database, "histories/"),
      orderByChild("to"),
      equalTo(uid),
      limitToLast(range)
    )
  ).then((res) => (res.exists() ? res.val() : null));
  return req;
}

export async function checkUser(id) {
  const req = await get(
    query(
      ref(database, "users/" + id)
    )
  ).then((res) => (res.exists() ? res.val() : null));
  return req;
}

export async function createUser({id, option}) {
  const req = await set(ref(database, "users/" + id), {...option})
}