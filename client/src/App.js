import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home,Details,Error, Landing } from "./pages";

import React from 'react'
import "./dist/css/main.css";

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route index path="/" element={<Landing/>} />
          <Route  path="/home" element={<Home/>} />
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="*" element={<Error/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
