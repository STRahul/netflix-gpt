import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex justify-between absolute w-full bg-gradient-to-b from-black px-8 py-2 z-10">
      <img
        className="w-32 sm:w-48"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-4">
          <img
            className="w-8 sm:w-12 h-8 sm:h-12 mx-3 rounded-full"
            alt="user"
            src={user.photoURL}
          />
          <button className="font-bold text-white" onClick={logoutHandler}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
