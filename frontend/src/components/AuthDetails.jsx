import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log(authUser);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="flex flex-col justify-center items-center">
      {authUser ? (
        <>
          <p className="text-green-400 text-xl">{`Logged In as ${authUser.email}`}</p>
          <button
            className="my-5 py-2 bg-red-400 text-white font-bold rounded-lg text-xl w-full"
            onClick={userSignOut}
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <p className="text-green-400 text-xl">Not Signed In</p>
        </>
      )}
    </div>
  );
};

export default AuthDetails;
