import React from 'react'
import { GoogleLogout } from "react-google-login";
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const clientId=process.env.REACT_APP_CLIENT_KEY


const LogoutButton = () => {

    const navigate = useNavigate();

    const {removeUser}=useAppContext();

    const onSuccess=()=>{
        console.log("LOGOUT SUCCESS")
        localStorage.removeItem("user");
        removeUser();
        navigate("/")
      
    }

  return (
    <div id='signInButton'>
        <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
        />
    </div>
  )
}

export default LogoutButton