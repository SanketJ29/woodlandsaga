import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthDetails from "../components/AuthDetails";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authState, setAuthState] = useState(null);

  const loginHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.message("User Signed In Successfully");
        console.log(userCredential);
      })
      .catch((error) => {
        toast.error("Error with User Sign In");
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <form
            className="items-center justify-center max-w-[300px] w-full mx-auto rounded-lg p-8 px-8"
            onSubmit={loginHandler} style={{ width: '100%', maxWidth: '400px' }}
          >
            <h2 className="text-4xl text-green-400 dark:text-white font-bold text-center mb-6">
              Login
            </h2>
            <div className="flex flex-col text-green-500 py-2 text-xl mb-5">
              <label>Email</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="flex flex-col text-green-500 text-xl py-2 mb-4">
              <label>Password</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              className="w-full my-5 py-2 bg-green-700 text-white font-bold rounded-lg text-2xl"
              type="submit"
            >
              Login
            </button>
            <div className="flex justify-center items-center text-green-200 font-mono text-2xl">
              <p>OR</p>
            </div>
            <Link to="/register">
              <button className="w-full my-5 py-2 bg-gray-700 text-green-300 font-bold rounded-lg text-2xl">
                Register
              </button>
            </Link>
          </form>
          <AuthDetails className="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
