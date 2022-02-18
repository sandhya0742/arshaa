import React from "react";
import {
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Cafteria from "./Components/CafteriaComponent/components/Cafteria";
// import { Button} from 'react-bootstrap';
import MainHome from "./Components/CafteriaComponent/components/MainHome";
import Login from "./Components/LoginComponent/Login";
import Park from "./parking-details/Park";
import Data from "./Components/EmployeeDetails/Data";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        

        <Route path="/cafteria" element={<Cafteria />} />
        <Route path="/home" element={<MainHome />} />
        <Route path="/park" element={<Park/>}/>
        <Route path="/employee" element={<Data/>}/>
      </Routes>
    </div>
  );
};

export default Home;
