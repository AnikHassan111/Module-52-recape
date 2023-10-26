import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../FireBase/FireBase.uitilit";


export const ContextApi = createContext(null)

const AuthProvider = ({ children }) => {

    let [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }

    const singIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            // console.log('user stats ',currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])
    let obj = {
        creatUser,
        user,
        logOut,
        singIn,
        loading
    }
    return (
        <ContextApi.Provider value={obj}>
            {children}
        </ContextApi.Provider>
    )
};

export default AuthProvider;

AuthProvider.propTypes = {
    childern: PropTypes.node
}