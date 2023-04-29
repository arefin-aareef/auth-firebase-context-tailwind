/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null)

    const authInfo = {
        user,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;