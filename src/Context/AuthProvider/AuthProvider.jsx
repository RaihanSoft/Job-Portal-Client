import React, { useEffect, useState } from 'react'
import AuthContext from '../AuthContext/AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from '../../Firebase/Firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    // Login 
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
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
        CreateUser,
        loader,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
