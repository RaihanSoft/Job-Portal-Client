import React, { useEffect, useState } from 'react'
import AuthContext from '../AuthContext/AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../Firebase/Firebase.config';


const AuthProvider = ({ children }) => {
    const googlePovider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    // Register
    const handleRegister = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Login 
    const Login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LogOut 
    const SignOut = () => {
        setLoader(true)
        return signOut(auth)

    }
    //Google LogIn
    const handleGoogle = () => {
        return signInWithPopup(auth, googlePovider)
    }


    // observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })

        return () => {
            unsubscribe()
        }

    }, [])


    const authInfo = {
        user,
        handleRegister,
        Login,
        loader,
        SignOut,
        handleGoogle,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
