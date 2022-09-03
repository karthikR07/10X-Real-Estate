import React from "react";
import Login from "./Components/Login/Login";
// import SignUp from "./Components/SignUp/SignUp";
import {Routes,Route,BrowserRouter} from "react-router-dom"
function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
