import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home,Details,Error, Landing } from "./pages";

import React from 'react'
import "./dist/css/main.css";
import ProtectedLayout from "./pages/ProtectedLayout";
import NavbarComponent from "./components/NavbarComponent";
import { useAppContext } from "./context/appContext";

const App = () => {
  const {user} =useAppContext();
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/landing" element={<Landing/>} />
          <Route index path="/home" element={<Home/>} />
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/landing" element={<Landing/>} />
          <Route path="*" element={<Error/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
