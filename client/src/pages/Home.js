import React from 'react'
import { Navigate } from 'react-router-dom';
import Container from '../components/Container'
import NavbarComponent from '../components/NavbarComponent'
import { useAppContext } from '../context/appContext';

const Home = () => {
  const {user} =useAppContext();
  return (
    <>
    {
      !user?<Navigate to="/landing" />:(
        <>
        <NavbarComponent/>
        <Container/>
        </>
      )
    }
     
    </>
  )
}

export default Home