import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import myAuth from '../Components/Authentication/Firebase/Firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const provider = new GoogleAuthProvider();

    const signInGoogle = () => {
        return signInWithPopup(myAuth, provider)
        setLoader(true)
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(myAuth, email, password)
        setLoader(true)
    }

    const logOut = () => {
        return signOut(myAuth)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(myAuth, email, password)
        setLoader(true)
    }
    const forgetPass = (email) => {
        return sendPasswordResetEmail(myAuth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(myAuth, (currentUser) => {
            setUser(currentUser);
            setTimeout(() => {
                setLoader(false)
            }, 1000);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authData = {
        user,
        logIn,
        forgetPass,
        createUser,
        logOut,
        setUser,
        signInGoogle,
        loader,
    }

    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;