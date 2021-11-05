import React, {useEffect, useState} from 'react';
import firebaseConfig from '../config';

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
    const [client, setClient] = useState(null);

    useEffect(() => {
        firebaseConfig.auth().onAuthStateChanged((currentUser) => {
            setClient(currentUser)
        })
    }, [])

    return (
        <AuthContext.Provider value={{client}}>
            {children}
        </AuthContext.Provider>
    )
}


