import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO } from "../utils/constants";
import { ToggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLang } from "../utils/appSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const gptSearchHandle = () => {
    dispatch(ToggleGptSearch());
  };

  const langHandler = (e)=>{
    dispatch(changeLang(e.target.value));
  }
  return (
    <div className="flex justify-between absolute w-full bg-gradient-to-b from-black max-[480px]:px-2 px-3 sm:px-8 py-2 z-10">
      <img className="w-32 max-[450px]:w-24 sm:w-48" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-4">
          {showGptSearch && (
            <select className="max-[400px]:w-16 w-20 m-1 rounded-md" onChange={langHandler}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white max-[450px]:text-sm bg-red-600 px-2 m-1 rounded-md sm:rounded-lg"
            onClick={gptSearchHandle}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-7 sm:w-12 h-7 sm:h-12 mx-3 my-1 rounded-full"
            alt="user"
            src={user.photoURL}
          />
          <button
            className="font-bold text-white max-[450px]:text-sm"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
