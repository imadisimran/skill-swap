import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null);
    // console.log(user)

  const createAccountEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const addUserNamePhoto=(userInfo)=>{
    return updateProfile(auth.currentUser,userInfo)
  }

  const logOut=()=>{
    return signOut(auth)
  }

  const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,user=>{
        setUser(user)
    })
    return ()=>unsubscribe()
  },[])

  const authData = {
    createAccountEmail,
    user,
    setUser,
    addUserNamePhoto,
    logOut,
    logIn
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
