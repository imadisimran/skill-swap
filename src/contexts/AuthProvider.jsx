import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    // console.log(user)

  const createAccountEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const addUserNamePhoto=(userInfo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,userInfo)
  }

  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }

  const logIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,user=>{
        setUser(user)
        setLoading(false)
    })
    return ()=>unsubscribe()
  },[])

  const authData = {
    createAccountEmail,
    user,
    setUser,
    addUserNamePhoto,
    logOut,
    logIn,
    loading,
    setLoading
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
