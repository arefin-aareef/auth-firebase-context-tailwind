/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {

    const user = {displayName: 'Arefin'}

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;