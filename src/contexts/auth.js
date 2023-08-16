import { useEffect, useState, createContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from '../services/firebaseConnection';
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    const navigate = useNavigate();

    async function singIn(email, password) {
        setLoadingAuth(true);

        await signInWithEmailAndPassword(auth, email, password)
            .then(async (value) => {
                let uid = value.user.uid;

                const docRef = doc(db, "users", uid);
                const docSnap = await getDoc(docRef);

                let data = {
                    uid: uid,
                    email: value.user.email
                }

                setUser(data);
                setLoadingAuth(false);
                navigate("/painel-administrador")
            })
            .catch((error) => {
                console.log(error);
                setLoadingAuth(false);
            })
    }


    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                singIn,
                loadingAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;