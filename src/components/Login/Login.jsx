import React from 'react';
import "./Login.css";
import {
    auth,
    signInWithPopup,
    provider
} from "../../firebase";
import {
    useUserContext
} from "../../context/UserContext";

const Login = () => {

    const userInfo = useUserContext();
    

    const signIn = ()=>{
        signInWithPopup(auth,provider)
        .then(({user})=>{
            userInfo.setUser({
                photoURL : user.photoURL,
                uid : user.uid 
            })
        })
        .catch((error)=>{
            console.error(error);
        })
    }

  return (
    <div className='login_container'>
        <div className="login">
            <img src="https://mailmeteor.com/logos/assets/PNG/Google_Drive_Logo_512px.png" alt="login_logo" />
            <button onClick={signIn}>Login with google</button>
        </div>
    </div>
  )
}

export default Login;