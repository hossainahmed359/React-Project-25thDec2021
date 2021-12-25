import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';

// Create Context
export const AuthContext = createContext(null);

// Function Wrap
const AuthProvider = ({ children }) => {

    // Set Value
    const allContexts = useFirebase();

    // Return and Provide Value
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;