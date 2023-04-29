/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h2>This is Home</h2>
            {user && <p>{user.displayName}</p> }
        </div>
    );
};

export default Home;