import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   sing in with google ================= //
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // =========== create user ================== //
  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  //============= sing in user ====================//
  const signInUSer = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // ================== sign out  user. ============= //

  const logout = () => {
    return signOut(auth);
  };

  // ================== manage user. ============= //
  useEffect(() => {
    setLoading(true);
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unSubscribe();
  }, [user]);
  const userInfo = {
    user,
    googleSignIn,
    createUser,
    signInUSer,
    logout,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
