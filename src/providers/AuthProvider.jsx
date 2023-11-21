import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import PropTypes from 'prop-types';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dark, setDark] = useState(false);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const Login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
    const LogOut = () => {
        setLoading(true);
        return signOut(auth);

    }

    const SignInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current user inside state change", currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])
    const authInfo = { dark, setDark, user, loading, createUser, Login, SignInWithGoogle, LogOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}