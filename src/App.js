import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import {  useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  
  return (
    <div className="w-screen h-screen flex flex-col bg-richblack-900 ">
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}></Navbar>


      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}></Home>}></Route>
        <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn} />}></Route>
        <Route path="/signup" element={<Signup setisLoggedIn={setisLoggedIn}></Signup>}></Route>
        <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard></Dashboard>
        </PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
