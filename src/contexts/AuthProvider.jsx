import React, { useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null);

  const createAccountEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const addUserNamePhoto=(userInfo)=>{
    return updateProfile(auth.currentUser,userInfo)
  }

  const authData = {
    createAccountEmail,
    user,
    setUser,
    addUserNamePhoto
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
