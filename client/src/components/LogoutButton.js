import React from 'react'
import { GoogleLogout } from "react-google-login";
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const clientId="937675287215-pbmcl7780opsoqesr6o820bsjjbghd23.apps.googleusercontent.com"


const LogoutButton = () => {

    const navigate = useNavigate();

    const {removeUser}=useAppContext();

    const onSuccess=()=>{
        console.log("LOGOUT SUCCESS")
        localStorage.removeItem("user");
        removeUser();
        navigate("/landing")
      
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