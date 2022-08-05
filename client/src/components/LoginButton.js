import React from 'react'
import { GoogleLogin } from "react-google-login";
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const clientId=process.env.REACT_APP_CLIENT_KEY



const LoginButton = () => {

    const navigate = useNavigate();

    const {setUser} =useAppContext();
    

    const onSuccess=(res)=>{
        console.log("LOGIN SUCCESS! Current user:",res.profileObj)
        localStorage.setItem("user",JSON.stringify(res.profileObj));
        setUser();
        navigate("/home")

    }

    const onFailure=(res)=>{
        console.log("LOGIN FAILED! res ",res)
    }


  return (
    <div id='signInButton'>
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
    </div>
  )
}

export default LoginButton