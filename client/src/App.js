import React from "react";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import {Routes,Route,BrowserRouter} from "react-router-dom"
import ListProp from "./Components/listproperty";
import Property from "./Components/addProp-page/mainProp";
function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/viewprop" element ={<ListProp/>}></Route>
          <Route path="/mainProp" element ={<Property/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
