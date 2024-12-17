import React, { useState } from 'react'
import AuthContext from '../AuthContext/AuthContext'
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../Firebase/Firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        user,
        CreateUser,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
