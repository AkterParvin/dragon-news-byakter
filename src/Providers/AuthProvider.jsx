/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // for register new user 
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // for sign in/login user 
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout function 
    const logOut = () => {
        return (
            signOut(auth)
        )

    }

    // for user change observer 
    useEffect(() => {
        const unSubscribe=onAuthStateChanged(auth, currentUser => {
            console.log('Usr in the auth state changed', currentUser);
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    },[])


    const authInfo = { user, creatUser,signInUser,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;