import { Navbar } from "./components/Navbar"
import { Profile } from "./components/Profile"
import { Projects } from "./components/Projects";

import { useState } from "react"
import axios from 'axios';

function App() {
   
  const [loader, setLoader] =useState(false);
  const [error, setError] =useState('');

  return (
    <>
     <Navbar/>
     <Profile/>
     <Projects/>   
    </>
  )
}

export default App
