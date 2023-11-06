import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/UserSlice";
import { BG_URL,IMG_URL } from "../utils/constants";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const message = checkValidation(
      email.current.value,
      password.current.value
    );

    setErrorMsg(message);

    if (message) return;

    if (!isLoggedIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: IMG_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              const errorMessage = error.message;
              setErrorMsg(errorMessage);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    } else {
      //sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="fixed">
        <img
          className="h-screen w-screen object-cover"
          src={BG_URL}
          alt="bg"
        />
      </div>

      <form
        className="absolute w-3/4 sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-black md:p-12 p-4 my-36 mx-auto left-0 right-0 text-white rounded-lg opacity-[.82]"
        onSubmit={submitHandler}
      >
        <h1 className="text-3xl font-bold py-4">
          {isLoggedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoggedIn && (
          <input
            className="p-2  my-3 w-full rounded-lg outline-none bg-gray-600 text-lg"
            type="text"
            placeholder="Full name"
            name="name"
            ref={name}
            autoComplete="off"
          />
        )}
        <input
          className="p-2  my-3 w-full rounded-lg outline-none bg-gray-600 text-lg"
          type="text"
          placeholder="Email address"
          name="email"
          ref={email}
        />
        <input
          className="p-2 my-3 w-full outline-none rounded-lg  bg-gray-600 text-lg"
          type="password"
          placeholder="Password"
          name="password"
          ref={password}
        />
        <p className="text-red-700 font-bold text-xl">{errorMsg}</p>
        <button className="py-3 my-5 w-full bg-red-700 rounded-lg text-xl">
          {isLoggedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-1 md:text-lg cursor-pointer" onClick={toggleSignIn}>
          {isLoggedIn
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Auth;
