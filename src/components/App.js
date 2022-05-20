import React from "react"
import NavBar from "./NavBar"
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Home from "./Home";



function App(){
    return(
        <div>
            <NavBar />
            <Routes>
                <Route  path="/about" element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}
export default App