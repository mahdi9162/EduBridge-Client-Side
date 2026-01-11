import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  deleteUser,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const fbProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //   Signup With Email and Pass
  const signUpWithEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Signin With Email and Pass
  const signInWithEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Signin With Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Github login
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // Fb login
  const signInWithFb = () => {
    setLoading(true);
    return signInWithPopup(auth, fbProvider);
  };

  // Reset email
  const resetUserEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Delete user
  const deleteUserProfile = () => {
    return deleteUser(user);
  };

  //   Sign Out
  const userSignOut = () => {
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
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    signUpWithEmailPass,
    signInWithEmailPass,
    signInWithGoogle,
    signInWithGithub,
    signInWithFb,
    resetUserEmail,
    deleteUserProfile,
    userSignOut,
    updateUserProfile,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
