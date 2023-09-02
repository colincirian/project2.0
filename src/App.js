import React from "react";
import Home from "./pages/home";
import Easy from "./pages/easy";
import { Router, Route, Routes} from "react-router-dom";
import "./style.css"


function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/easy' element = {<Easy />} />
      </Routes>
    </>
  )
}

export default App;
