import React from "react";
import {
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Cafteria from "./Components/CafteriaComponent/components/Cafteria";
// import { Button} from 'react-bootstrap';
import CafeButton from "./Components/CafteriaComponent/components/CafeButton";
import Login from "./Components/LoginComponent/Login";
import Park from "./parking-details/Park";
import Data from "./EmployeeDetails/Data";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        

        <Route path="/cafteria" element={<Cafteria />} />
        <Route path="/cafe" element={<CafeButton />} />
        <Route path="/park" element={<Park/>}/>
        <Route path="/employee" element={<Data/>}/>
      </Routes>
    </div>
  );
};

export default Home;
