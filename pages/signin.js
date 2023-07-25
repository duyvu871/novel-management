import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthUserProvider";
import Login from "../components/Form/login";

export default function signin({}) {
  const { providers, authUser, loading } = useAuth();
  const router = useRouter();
  // console.log({
  //   authUser,loading,
  //   typeChecked: !loading && !authUser
  // });
  useEffect(() => {
    if (authUser) router.push("/");
  }, [authUser, loading]);


  return (
    <div className="m-5 shadow-lg">
      {" "}
      <Login providers={providers} />
    </div>
  );
}
