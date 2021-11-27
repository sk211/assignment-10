import {useState , useEffect} from "react"
import initalizeAuthentaction from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged , signOut } from "firebase/auth";


initalizeAuthentaction()

const useFirebase = ()=>{
    const [user, setUser] = useState({});
    const [error, setErrot]= useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

   const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(resutl =>{
            console.log(resutl.user);
            setUser(resutl.user)
        })
        .catch(error=>{
            setErrot(error.message)
        })
    }
    const logOut = () =>{     signOut(auth)
        .then(() => {
            setUser({})
          })
    }
    useEffect( () =>{
        onAuthStateChanged(auth, user=>{
            if(user){
                console.log("inside state chage", user);
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        error,
        signInUsingGoogle,
        logOut

        }
}
export default useFirebase