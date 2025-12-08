import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getAuth } from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(null);
  const [user, setUser] = useState(null);
  const auth = getAuth();

  //   Signup With Email and Pass
  const signUpWithEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Signin With Email and Pass
  const signInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Signin With Google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  //   Sign Out
  const useSignOut = () => {
    return signOut(auth);
  };

  // Update User
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //   Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);

  const authInfo = {
    user,
    loading,
    signUpWithEmailPass,
    signInWithEmailPass,
    signInWithGoogle,
    useSignOut,
    updateUserProfile,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
